(function () {
    'use strict';

    angular
        .module('pcb.polyclinique')
        .controller('PolycliniqueDoctorController', PolycliniqueDoctorController);

    PolycliniqueDoctorController.$inject = ['$scope', '$state', '$ionicLoading', '$ionicPopup', 'Speciality', 'Doctor', 'Calendar', 'loading'];

    function PolycliniqueDoctorController($scope, $state, $ionicLoading, $ionicPopup, Speciality, Doctor, Calendar, loading) {

        $scope.doctors = [];
        $scope.services = [];
        $scope.calendars = [];
        $scope.days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

        activate();
        ////////////////////////////////////////////////////////////////////////








        function activate() {
            loading.show();

            // Get all doctors.
            if(typeof $state.params.doctor === 'undefined') {

                Speciality.getAll()
                    .then(function (services) {
                        $scope.services = services;

                        Doctor.getAll()
                            .then(function (data) {

                                // For each doctor.
                                data.forEach(function(doctor) {

                                    // For each service.
                                    $scope.services.forEach(function(service) {
                                        if (service.id === doctor.service) {
                                            doctor.service = service;
                                        }
                                    });
                                });

                                $scope.doctors = data;

                                // Remove loading icon.
                                loading.hide();
                            })

                            .catch(polycliniqueDoctorControllerError);
                    })
                    .catch(polycliniqueDoctorControllerError);

            } else {

                // Get doctor.
                Speciality.getAll().then(function (data) {
                    $scope.services = data;

                    Doctor.get($state.params.doctor)
                        .then(function (doctor) {
                            // For each service.
                            $scope.services.forEach(function(service) {
                                if (service.id === doctor.service) {
                                    doctor.service = service;
                                }
                            });
                            $scope.doctor = doctor;

                            // Remove loading icon.
                            $ionicLoading.hide();
                        })
                        .catch(polycliniqueDoctorControllerError);

                    Calendar.getByDoctor($state.params.doctor)
                        .then(function (calendars) {
                            for (var calendar in calendars) {
                                for (var hour in calendars[calendar]) {
                                    var dateParts = calendars[calendar][hour].start.date.match(/(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2})/);
                                    calendars[calendar][hour].start.jsdate = new Date(dateParts[1], dateParts[2], dateParts[3], dateParts[4], dateParts[5], 0, 0);

                                    var dateParts = calendars[calendar][hour].end.date.match(/(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2})/);
                                    calendars[calendar][hour].end.jsdate = new Date(dateParts[1], dateParts[2], dateParts[3], dateParts[4], dateParts[5], 0, 0);
                                }
                            }
                            $scope.calendars = calendars;
                        })
                        .catch(polycliniqueDoctorControllerError);
                });
            }
        }


        function polycliniqueDoctorControllerError(error) {
            $ionicPopup.alert({
                title: 'Error',
                template: error.message
            });

            // Remove loading icon.
            loading.hide();
        }
    }

})();

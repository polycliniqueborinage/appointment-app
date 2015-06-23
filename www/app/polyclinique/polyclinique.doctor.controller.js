(function () {
    'use strict';

    angular
        .module('pcb.polyclinique')
        .controller('PolycliniqueDoctorController', PolycliniqueDoctorController);

    PolycliniqueDoctorController.$inject = ['$scope', '$state', 'Speciality', 'Doctor', 'Calendar'];

    function PolycliniqueDoctorController($scope, $state, Speciality, Doctor, Calendar) {

        $scope.doctors = [];
        $scope.services = [];

        activate();
        ////////////////////////////////////////////////////////////////////////







        function activate() {
            // Get all doctors.
            if(typeof $state.params.doctor === 'undefined') {
                Speciality.getAll().then(function (services) {
                    $scope.services = services;

                    Doctor.getAll().then(function (data) {

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
                    });
                });
            } else {
                // Get doctor.
                Speciality.getAll().then(function (data) {
                    $scope.services = data;

                    Doctor.get($state.params.doctor).then(function (doctor) {
                        // For each service.
                        $scope.services.forEach(function(service) {
                            if (service.id === doctor.service) {
                                doctor.service = service;
                            }
                        });
                        $scope.doctor = doctor;
                    });

                    Calendar.getByDoctor($state.params.doctor).then(function (data) {
                        console.log(data);
                    });
                });
            }
        }
    }

})();

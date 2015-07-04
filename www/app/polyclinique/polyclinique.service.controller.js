(function () {
    'use strict';

    angular
        .module('pcb.polyclinique')
        .controller('PolycliniqueServiceController', PolycliniqueServiceController);

    PolycliniqueServiceController.$inject = ['$scope', '$ionicLoading', '$ionicPopup', 'Speciality', 'Doctor', 'loading'];

    function PolycliniqueServiceController($scope, $ionicLoading, $ionicPopup, Speciality, Doctor, loading) {

        $scope.doctors = [];
        $scope.services = [];

        activate();
        ////////////////////////////////////////////////////////////////////////









        function activate() {
            loading.show();

            Doctor.getAll().then(function (data) {
                $scope.doctors = data;

                Speciality.getAll()
                    .then(function (data) {
                        // For each service.
                        data.forEach(function(service) {
                            service.doctors = [];

                            // For each doctor.
                            $scope.doctors.forEach(function(doctor) {
                                if (doctor.service === service.id) {
                                    service.doctors.push(doctor);
                                }
                            });

                        });
                        $scope.services = data;

                        // Remove loading icon.
                        loading.hide();
                    })

                    .catch(polycliniqueServiceControllerError);

                })

                .catch(polycliniqueServiceControllerError);
        }

        function polycliniqueServiceControllerError(error) {
            $ionicPopup.alert({
                title: 'Error',
                template: error.message
            });

            // Remove loading icon.
            loading.hide();
        }
    }

})();

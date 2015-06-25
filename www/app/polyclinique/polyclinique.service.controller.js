(function () {
    'use strict';

    angular
        .module('pcb.polyclinique')
        .controller('PolycliniqueServiceController', PolycliniqueServiceController);

    PolycliniqueServiceController.$inject = ['$scope', '$ionicLoading', 'Speciality', 'Doctor'];

    function PolycliniqueServiceController($scope, $ionicLoading, Speciality, Doctor) {

        $scope.doctors = [];
        $scope.services = [];

        activate();
        ////////////////////////////////////////////////////////////////////////







        function activate() {
            $ionicLoading.show({
                content: '<i class="icon ion-loading-c"></i>',
                animation: 'fade-in',
                showBackdrop: false,
                maxWidth: 50,
                showDelay: 0
            });

            Doctor.getAll().then(function (data) {
                $scope.doctors = data;

                Speciality.getAll().then(function (data) {
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
                    $ionicLoading.hide();
                });
            });
        }
    }

})();

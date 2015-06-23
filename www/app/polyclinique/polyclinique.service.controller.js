(function () {
    'use strict';

    angular
        .module('pcb.polyclinique')
        .controller('PolycliniqueServiceController', PolycliniqueServiceController);

    PolycliniqueServiceController.$inject = ['$scope', 'Speciality', 'Doctor'];

    function PolycliniqueServiceController($scope, Speciality, Doctor) {

        $scope.doctors = [];
        $scope.services = [];

        activate();
        ////////////////////////////////////////////////////////////////////////







        function activate() {
            Doctor.getAll().then(function (data) {
                $scope.doctors = data;

                Speciality.getAll().then(function (data) {
                    // For each service.
                    data.forEach(function(service) {
                        service.doctors = [];

                        // For each specialistes.
                        $scope.doctors.forEach(function(doctor) {
                            if (doctor.service === service.id) {
                                service.doctors.push(doctor);
                            }
                        });

                    });
                    $scope.services = data;
                });
            });
        }
    }

})();

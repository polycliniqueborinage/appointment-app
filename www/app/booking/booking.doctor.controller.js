(function () {
    'use strict';

    angular
        .module('pcb.booking')
        .controller('BookingDoctorController', BookingDoctorController);

    BookingDoctorController.$inject = ['$scope', 'Doctor'];

    function BookingDoctorController($scope, Doctor) {

        $scope.doctors = [];

        activate();
        ////////////////////////////////////////////////////////////////////////







        function activate() {
            Doctor.getAll().then(function (data) {
                $scope.doctors = data;
            });
        }
    }

})();

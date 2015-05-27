(function () {
    'use strict';

    angular
        .module('pcb.booking')
        .controller('BookingDoctorController', BookingDoctorController);

    BookingDoctorController.$inject = ['$scope', '$state', 'Doctor'];

    function BookingDoctorController($scope, $state, Doctor) {

        $scope.doctors = [];

        activate();
        ////////////////////////////////////////////////////////////////////////







        function activate() {
            if ($state.params.speciality) {
                Doctor.getBySpeciality($state.params.speciality).then(function (data) {
                    $scope.doctors = data;
                });
            } else {
                Doctor.getAll().then(function (data) {
                    $scope.doctors = data;
                });
            }
        }
    }

})();

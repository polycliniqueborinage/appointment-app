(function () {
    'use strict';

    angular
        .module('pcb.booking')
        .controller('BookingDoctorController', BookingDoctorController);

    BookingDoctorController.$inject = ['$scope', '$state', 'loading', 'Doctor'];

    function BookingDoctorController($scope, $state, loading, Doctor) {

        $scope.doctors = [];

        activate();
        ////////////////////////////////////////////////////////////////////////







        function activate() {
            loading.show();

            if ($state.params.speciality) {
                Doctor.getBySpeciality($state.params.speciality).then(function (data) {
                    $scope.doctors = data;
                    loading.hide();
                });
            } else {
                Doctor.getAll().then(function (data) {
                    $scope.doctors = data;
                    loading.hide();
                });
            }
        }
    }

})();

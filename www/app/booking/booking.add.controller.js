(function () {
    'use strict';

    angular
        .module('pcb.booking')
        .controller('BookingAddController', BookingAddController);

    BookingAddController.$inject = ['$scope', '$state', 'Booking', 'Doctor'];

    function BookingAddController($scope, $state, Booking, Doctor) {

        activate();
        ////////////////////////////////////////////////////////////////////////







        function activate() {
            Doctor.get($state.params.doctor).then(function (data) {
                $scope.doctor = data;
                console.log($scope.doctor);
            });
            $scope.start = new Date($state.params.start)
            $scope.end = new Date($state.params.end)
        }

    }

})();

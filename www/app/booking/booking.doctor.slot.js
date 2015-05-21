(function () {
    'use strict';

    angular
        .module('pcb.booking')
        .controller('BookingSlotController', BookingSlotController);

    BookingSlotController.$inject = ['$scope', 'Booking'];

    function BookingSlotController($scope, Booking) {

        $scope.slots = [];

        activate();
        ////////////////////////////////////////////////////////////////////////







        function activate() {
            Booking.getAll().then(function (data) {
                $scope.slots = data;
            });
        }
    }

})();

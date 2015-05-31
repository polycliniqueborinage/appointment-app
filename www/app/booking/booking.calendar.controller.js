(function () {
    'use strict';

    angular
        .module('pcb.booking')
        .controller('BookingCalendarController', BookingCalendarController);

    BookingCalendarController.$inject = ['$scope', '$state', 'Booking'];

    function BookingCalendarController($scope, $state, Booking) {

        $scope.slots = [];

        $scope.rangeChanged = function (startTime, endTime) {
            console.log('rangeChanged');
        };

        $scope.onEventSelected = function (event) {
            console.log('onEventSelected');
        };

        $scope.onTimeSelected = function (selectedTime) {
            getAvailableSlotsByDay(moment(new Date(selectedTime)).format('YYYY-MM-DD'));
        };

        activate();
        ////////////////////////////////////////////////////////////////////////







        function activate() {
            $scope.doctor = $state.params.doctor;
            $scope.currentDate = moment(new Date()).format('YYYY-MM-DD');

            getAvailableSlotsByMonth($scope.currentDate);
        }

        function getAvailableSlotsByDay(date) {
            $scope.doctor = $state.params.doctor;

            Booking.getAvailableSlotsByDay($scope.doctor, date).then(function (data) {
                $scope.slots = data;
            });
        }

        function getAvailableSlotsByMonth(date) {
            $scope.doctor = $state.params.doctor;

            Booking.getAvailableSlotsByMonth($scope.doctor, date).then(function (data) {
                $scope.eventSource = data;
            });
        }

    }

})();

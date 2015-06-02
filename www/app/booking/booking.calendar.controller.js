(function () {
    'use strict';

    angular
        .module('pcb.booking')
        .controller('BookingCalendarController', BookingCalendarController);

    BookingCalendarController.$inject = ['$scope', '$state', 'Booking'];

    function BookingCalendarController($scope, $state, Booking) {

        $scope.slots = [];

        $scope.onRangeChanged = function (startTime, endTime) {
            $scope.startDate = moment(startTime).format('YYYY-MM-DD');
            $scope.endDate = moment(endTime).format('YYYY-MM-DD');
            $scope.centerDate = moment(startTime).add(14, 'days').format('YYYY-MM-DD');
            getAvailableSlotsByMonth($scope.centerDate);
        };

        $scope.onTimeSelected = function (selectedTime) {
            $scope.selectedDate = moment(selectedTime).format('YYYY-MM-DD');
            getAvailableSlotsByDay($scope.selectedDate);
        };

        activate();
        ////////////////////////////////////////////////////////////////////////







        function activate() {
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

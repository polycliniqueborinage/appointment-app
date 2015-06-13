(function () {
    'use strict';

    angular
        .module('pcb.booking')
        .factory('Booking', Booking);

    Booking.$inject = ['$q', '$http', 'Dataservice'];

    function Booking($q, $http, Dataservice) {

        var apiURL = '';
        var config = {};

        var booking = {
            getAvailableSlotsByDay: getAvailableSlotsByDay,
            getAvailableSlotsByMonth: getAvailableSlotsByMonth
        };

        return booking;

        ////////////////////////////////////////////////////////////////////////






        function getAvailableSlotsByMonth (id, date) {
            var events = [];
            apiURL = '/doctors/' + id + '/bookings/' + date + '?interval=month';

            return Dataservice.get(apiURL, config).then(function (data) {
                data.forEach(function( value ) {
                    events.push({
                        title: 'Event',
                        startTime: new Date(value.start.date),
                        endTime: new Date(value.end.date),
                        allDay: false
                    });
                });
                return events;
            });
        };

        function getAvailableSlotsByDay (id, date) {
            var events = [];

            apiURL = '/doctors/' + id + '/bookings/' + date + '?interval=day';
            return Dataservice.get(apiURL, config).then(function (data) {
                data.forEach(function( value ) {
                    events.push({
                        title: 'Event',
                        startTime: new Date(value.start.date),
                        endTime: new Date(value.end.date),
                        allDay: false
                    });
                });
                return events;
            });
        };

    }

})();

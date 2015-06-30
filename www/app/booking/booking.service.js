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
                    var startTimeParts = value.start.date.match(/(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2})/);
                    var endTimeParts = value.end.date.match(/(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2})/);
                    events.push({
                        title: 'Event',
                        startTime: new Date(startTimeParts[1], startTimeParts[2]-1, startTimeParts[3], startTimeParts[4], startTimeParts[5], 0, 0),
                        endTime: new Date(endTimeParts[1], endTimeParts[2]-1, endTimeParts[3], endTimeParts[4], endTimeParts[5], 0, 0),
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
                    var startTimeParts = value.start.date.match(/(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2})/);
                    var endTimeParts = value.end.date.match(/(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2})/);
                    events.push({
                        title: 'Event',
                        startTime: new Date(startTimeParts[1], startTimeParts[2]-1, startTimeParts[3], startTimeParts[4], startTimeParts[5], 0, 0),
                        endTime: new Date(endTimeParts[1], endTimeParts[2]-1, endTimeParts[3], endTimeParts[4], endTimeParts[5], 0, 0),
                        allDay: false
                    });
                });
                return events;
            });
        };

    }

})();

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
            getAvailableSlotsByMonth: getAvailableSlotsByMonth,
            addSlot: addSlot,
            deleteSlot: deleteSlot,
            getSlot: getSlot
        };

        return booking;

        ////////////////////////////////////////////////////////////////////////






        function addSlot (user, doctor, start, end) {
            apiURL = '/doctors/' + doctor.id + '/bookings/' + start.getFullYear() + '-' + ( start.getMonth() + 1 ) + '-' + start.getDate();

            // Create a clone so we don't impact the original.
            try {
                var slot = new Object();
                slot.firstname = user.firstname;
                slot.lastname = user.lastname;
                slot.birthdate = user.birthdate.toString();
                slot.start = start.toString();
                slot.end = end.toString();
            }
            catch(err) {
            }

            console.log(slot);
            return Dataservice.post(apiURL, slot).then(function (data) {
                return data;
            });
        };

        function deleteSlot (id) {
            apiURL = '/users/register';
            return Dataservice.post(apiURL, config).then(function (data) {
                return data;
            });
        };

        function getSlot (id) {
            apiURL = '/users/register';
            return Dataservice.post(apiURL, config).then(function (data) {
                return data;
            });
        };

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

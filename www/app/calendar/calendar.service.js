(function () {
    'use strict';

    angular
        .module('pcb.calendar')
        .factory('Calendar', Calendar);

    Calendar.$inject = ['$q', 'Dataservice'];

    function Calendar($q, Dataservice) {

        var apiURL = '';
        var config = {};

        var booking = {
            getByDoctor: getByDoctor,
            getByService: getByService
        };

        return booking;

        ////////////////////////////////////////////////////////////////////////






        function getByDoctor (id) {
            var events = [];
            apiURL = '/doctors/' + id + '/calendars';

            return Dataservice.get(apiURL, config).then(function (data) {
                return data;
            });
        };

        function getByService (id) {
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

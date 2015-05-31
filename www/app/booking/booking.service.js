(function () {
    'use strict';

    angular
        .module('pcb.booking')
        .factory('Booking', Booking);

    Booking.$inject = ['$q', '$http'];

    function Booking($q, $http) {

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
            apiURL = 'http://local.drupal8:8888/index_dev.php/v1/doctors/' + id + '/bookings/' + date + '?interval=month';
            return httpRequest().then(function (data) {
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
            apiURL = 'http://local.drupal8:8888/index_dev.php/v1/doctors/' + id + '/bookings/' + date + '?interval=day';
            return httpRequest().then(function (data) {
                return data;
            });
        };

        function httpRequest () {
            return $http.get(apiURL, config)
                .then(httpRequestSuccess, httpRequestError);
        };

        function httpRequestSuccess (response) {
            return response.data;
        };

        function httpRequestError () {
            return FALSE;
        };

    }

})();

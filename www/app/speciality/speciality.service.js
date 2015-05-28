(function () {
    'use strict';

    angular
        .module('pcb.speciality')
        .factory('Speciality', Speciality);

    Speciality.$inject = ['$q', '$http'];

    function Speciality($q, $http) {

        var apiURL = 'http://local.drupal8:8888/v1/specialities';
        var config = {};

        var speciality = {
            getAll: getAll
        };

        return speciality;
        ////////////////////////////////////////////////////////////////////////




        function getAll () {
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

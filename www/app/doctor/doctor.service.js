(function () {
    'use strict';

    angular
        .module('pcb.doctor')
        .factory('Doctor', Doctor);

    Doctor.$inject = ['$q', '$http'];

    function Doctor($q, $http) {

        var apiURL = 'http://local.drupal8:8888/v1/doctor';
        var config = {};

        var doctor = {
            getAll: getAll,
            getBySpeciality: getBySpeciality
        };

        return doctor;

        ////////////////////////////////////////////////////////////////////////





        function getBySpeciality (id) {
            apiURL = 'http://local.drupal8:8888/v1/speciality/' + id + '/doctor';
            return httpRequest().then(function (data) {
                return data;
            });
        };

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

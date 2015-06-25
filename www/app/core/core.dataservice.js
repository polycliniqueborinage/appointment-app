(function () {
    'use strict';

    angular
        .module('pcb.core')
        .factory('Dataservice', Dataservice);

    Dataservice.$inject = ['$http', '$q', 'API', 'localstorage'];

    function Dataservice($http, $q, API, localstorage) {
        var service = {
            get: getHttpRequest,
            post: postHttpRequest
        };

        return service;
        ////////////////////////////////////////////////////////////////////////





        function postHttpRequest(apiURL, config) {
            $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            return $http.post(API.url + apiURL, config)
                .then(httpRequestSuccess)
                .catch(httpRequestError);
        };

        function getHttpRequest(apiURL, config, cache) {
            return $http.get(API.url + apiURL)
                .then(httpRequestSuccess)
                .catch(httpRequestError);
        };

        function httpRequestSuccess(response) {
            return response.data;
        }

        function httpRequestError(error) {
            var msg = 'query failed. ' + error.data.description;
            return $q.reject(msg);
        }
    }
})();

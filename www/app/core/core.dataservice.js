(function () {
    'use strict';

    angular
        .module('pcb.core')
        .factory('Dataservice', Dataservice);

    Dataservice.$inject = ['$http', '$q', '$timeout', '$log', 'API', 'localstorage'];

    function Dataservice($http, $q, $timeout, $log, API, localstorage) {
        var service = {
            get: getHttpRequest,
            post: postHttpRequest
        };

        return service;
        ////////////////////////////////////////////////////////////////////////





        function postHttpRequest(apiURL, config) {
            $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            // $http.defaults.headers.post["Content-Type"] = "application/json";
            // var data = JSON.stringify(config);
            return $http.post(API.url + apiURL, config)
                .then(httpRequestSuccess)
                .catch(httpRequestError);
        };

        function getHttpRequest(apiURL, config) {
            // Try to get the value from the cache.
            var cache = localstorage.getTemporalyObject(API.url + apiURL);
            if (cache) {
                return $q.when(cache);
            }

            // Add a timeout.
            var deferred = $q.defer();

            $timeout(function() {
                deferred.resolve();
            }, 7000);

            // Add timeout config.
            config.timeout = deferred.promise;

            $log.info(API.url + apiURL);
            return $http.get(API.url + apiURL, config)
                .then(httpRequestSuccess)
                .catch(httpRequestError);
        };

        function httpRequestSuccess(response) {
            // If expiration, we record the value.
            if (response.config.expiration != null) {
                localstorage.setTemporalyObject(response.config.url, response.data, response.config.expiration);
            }
            return response.data;
        }

        function httpRequestError(error) {
            if(error.status === 0) {
                error.message = 'query timeout';
                return $q.reject(error);
            } else {
                // Response error status from server.
                error.message = 'query failed. ' + error.data.description;
                return $q.reject(error);
            }
        }
    }
})();

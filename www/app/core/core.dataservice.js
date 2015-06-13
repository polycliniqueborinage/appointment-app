(function () {
    'use strict';

    angular
        .module('pcb.core')
        .factory('Dataservice', Dataservice);

    Dataservice.$inject = ['$http', '$q', 'API'];

    function Dataservice($http, $q, API) {
        var service = {
            get: getHttpRequest
        };

        return service;
        ////////////////////////////////////////////////////////////////////////






        // Post.

        function getHttpRequest(apiURL, config) {
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

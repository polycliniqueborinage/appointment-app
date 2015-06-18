(function () {
    'use strict';

    angular
        .module('pcb.core')
        .factory('Dataservice', Dataservice);

    Dataservice.$inject = ['$http', '$q', 'API'];

    function Dataservice($http, $q, API) {
        var service = {
            get: getHttpRequest,
            post: postHttpRequest
        };

        return service;
        ////////////////////////////////////////////////////////////////////////


        function postHttpRequest(apiURL, config) {
            console.log(apiURL);
            console.log(config);
            return $http.post(API.url + apiURL, config)
                .then(httpRequestSuccess)
                .catch(httpRequestError);
        };

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

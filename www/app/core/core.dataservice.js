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





        function getHttpRequest(apiURL, config) {
            return $http.get(API.url + apiURL)
                .then(httpRequestSuccess)
                .catch(httpRequestError);
        };

        function httpRequestSuccess(response) {
            return response.data;
        }

        function httpRequestError(error) {
            var msg = 'query for people failed. ' + error.data.description;
            console.log(msg);
            return $q.reject(msg);
        }
    }
})();

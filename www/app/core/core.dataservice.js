(function () {
    'use strict';

    angular
        .module('pcb.core')
        .factory('Dataservice', Dataservice);

    Dataservice.$inject = ['$http', '$q', 'logger'];

    function Dataservice($http, $q, logger) {
        var service = {
            getPeople: getPeople,
            getMessageCount: getMessageCount
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function getPeople() {
            return $http.get('/api/people')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(error) {
                var msg = 'query for people failed. ' + error.data.description;
                logger.error(msg);
                return $q.reject(msg);
            }
        }
    }
})();

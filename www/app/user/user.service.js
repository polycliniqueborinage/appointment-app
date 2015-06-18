(function () {
    'use strict';

    angular
        .module('pcb.user')
        .factory('User', User);

    User.$inject = ['$q', '$http', 'Dataservice'];

    function User($q, $http, Dataservice) {

        var apiURL = '';
        var config = {};

        var user = {
            authenticate: authenticate
        };

        return user;

        ////////////////////////////////////////////////////////////////////////

        function authenticate (config) {
            apiURL = '/users/authenticate';
            return Dataservice.post(apiURL, config).then(function (data) {
                return data;
            });
        };

    }

})();

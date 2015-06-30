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
            register: register,
            login: login,
            logout: logout,
            isAuthed: isAuthed
        };

        return user;

        ////////////////////////////////////////////////////////////////////////







        function register (config) {
            apiURL = '/users/register';
            return Dataservice.post(apiURL, config).then(function (data) {
                return data;
            });
        };

        function login (config) {
            apiURL = '/users/login';
            console.log(config);
            return Dataservice.post(apiURL, config).then(function (data) {
                return data;
            });
        };

        function logout () {
        };

        function isAuthed () {
        };
    }

})();

(function () {
    'use strict';

    angular
        .module('pcb.core')
        .factory('Authentification', Authentification);

    Authentification.$inject = ['$q', '$window', 'localstorage'];

    function Authentification($q, $window, localstorage) {
        var service = {
            parseJwt: parseJwt,
            saveToken: saveToken,
            getToken: getToken,
            deleteToken: deleteToken,
            isAuthentificated: isAuthentificated
        };

        return service;
        ////////////////////////////////////////////////////////////////////////



        function isAuthentificated() {
            var token = this.getToken();
            if(token) {
                var params = this.parseJwt(token);
                return Math.round(new Date().getTime() / 1000);
            } else {
                return false;
            }
        };

        function parseJwt(token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse($window.atob(base64));
        };

        function saveToken(token) {
            localstorage.set('authToken', token);
        };

        function getToken() {
            return localstorage.get('authToken');
        }

        function deleteToken() {
            return localstorage.delete('authToken');
        }
    }
})();

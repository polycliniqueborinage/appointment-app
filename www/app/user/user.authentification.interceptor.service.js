// Auth token interceptor (appends the Authorization header to every request)

(function () {
    'use strict';

    angular
        .module('pcb.user')
        .factory('UserAuthentificationInterceptor', UserAuthentificationInterceptor);

    UserAuthentificationInterceptor.$inject = ['$q', 'localstorage'];

    function UserAuthentificationInterceptor($q, localstorage) {

        return request;

        ////////////////////////////////////////////////////////////////////////





        function request () {
            var authToken = Storage.get("authToken");
            config.headers = config.headers || {};

            if (authToken) {
                config.headers.Authorization = 'Bearer ' + authToken;
            }

            return config || $q.when(config);
        };
    }

})();

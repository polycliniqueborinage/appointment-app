(function() {
    'use strict';

    angular
        .module('pcb.core')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

    function stateConfig($stateProvider, $urlRouterProvider, $httpProvider) {

        $stateProvider

            .state('scaffold', {
                abstract: true,
                templateUrl: "app/core/templates/scaffold.html"
            })

            // Setup an abstract state for the tabs directive.
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "app/core/templates/tabs.html",
                parent: "scaffold"
                // controller: 'UserController'
            });

        // If none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/dashboard');

        // Use the auth token interceptor to append the auth_token to every request
        $httpProvider.interceptors.push('UserAuthentificationInterceptor');
    }

})();

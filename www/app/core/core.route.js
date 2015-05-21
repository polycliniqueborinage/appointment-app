(function() {
    'use strict';

    angular
        .module('pcb.core')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function stateConfig($stateProvider, $urlRouterProvider) {
        $stateProvider

            // Setup an abstract state for the tabs directive.
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "app/core/templates/tabs.html"
            });

        // If none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/dashboard');
    }

})();
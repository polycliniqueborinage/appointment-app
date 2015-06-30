(function() {
    'use strict';

    angular
        .module('pcb.dashboard')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('tab.dashboard', {
                url: "/dashboard",
                parent: "tab",
                views: {
                    'tab-dashboard': {
                        templateUrl: "app/dashboard/templates/main.html",
                        controller: 'DashboardController'
                    }
                }
            });
    }

})();

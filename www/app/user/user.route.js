(function() {
    'use strict';

    angular
        .module('pcb.user')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('tab.polyclinique-profile', {
                url: "/polyclinique/profile",
                views: {
                    'tab-polyclinique': {
                        templateUrl: "app/user/templates/profile.html",
                        //controller: 'UserController'
                    }
                }
            })
            .state('tab.polyclinique-create-profile', {
                url: "/polyclinique/create-profile",
                views: {
                    'tab-polyclinique': {
                        templateUrl: "app/user/templates/create-profile.html",
                        //controller: 'UserController'
                    }
                }
            });

    }

})();

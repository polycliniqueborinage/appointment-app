(function () {
    'use strict';

    angular.module('pcb.ionic', [
        'pcb.core',
    ])

        .run(function($ionicPlatform) {
            $ionicPlatform.ready(function() {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        })

        .config(['$ionicAppProvider', function($ionicAppProvider) {
            // Identify app
            $ionicAppProvider.identify({
                // The App ID for the server
                app_id: 'c32339f3',
                // The API key all services will use for this app
                api_key: '9944faa518d18995ee6126f1c903b9920002b02e5546239e'
            });

        }])

        .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
            // Turn off caching for demo simplicity's sake
            // $ionicConfigProvider.views.maxCache(0);
        });
})();

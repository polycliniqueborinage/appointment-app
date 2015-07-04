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

        .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
            // Turn off caching for demo simplicity's sake
            // $ionicConfigProvider.views.maxCache(0);
        });
})();

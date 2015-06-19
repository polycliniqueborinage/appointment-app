(function() {
    'use strict';

    angular
        .module('pcb.polyclinique')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('polyclinique.device', {
                url: "/polyclinique/device",
                views: {
                    'tab-booking': {
                        templateUrl: "app/polyclinique/templates/device.html",
//                        controller: 'DeviceCtrl'
                    }
                }
            })

            .state('polyclinique.battery', {
                url: "/polyclinique/battery",
                views: {
                    'tab-booking': {
                        templateUrl: "app/polyclinique/templates/battery.html",
//                        controller: 'BatteryCtrl'
                    }
                }
            })

            .state('polyclinique.camera', {
                url: "/polyclinique/camera",
                views: {
                    'tab-booking': {
                        templateUrl: "app/polyclinique/templates/camera.html",
                        controller: 'CameraCtrl'
                    }
                }
            })

            .state('polyclinique.motion', {
                url: "/polyclinique/motion",
                views: {
                    'tab-booking': {
                        templateUrl: "app/polyclinique/templates/motion.html",
                        controller: 'MotionCtrl'
                    }
                }
            })

            .state('polyclinique.notifications', {
                url: "/polyclinique/notifications",
                views: {
                    'tab-booking': {
                        templateUrl: "app/polyclinique/templates/notifications.html",
                        controller: 'NotificationsCtrl'
                    }
                }
            })

            .state('polyclinique.network', {
                url: "/polyclinique/network",
                views: {
                    'tab-booking': {
                        templateUrl: "app/polyclinique/templates/network.html",
                        controller: 'NetworkCtrl'
                    }
                }
            })

            .state('polyclinique.pin', {
                url: "/polyclinique/pin",
                views: {
                    'tab-booking': {
                        templateUrl: "app/polyclinique/templates/pin.html",
                        controller: 'PinCtrl'
                    }
                }
            })

            .state('polyclinique.share', {
                url: "/polyclinique/share",
                views: {
                    'tab-booking': {
                        templateUrl: "app/polyclinique/templates/share.html",
                        controller: 'ShareCtrl'
                    }
                }
            })

            .state('polyclinique.sqlite', {
                url: "/polyclinique/sqlite",
                views: {
                    'tab-booking': {
                        templateUrl: "app/polyclinique/templates/sqlite.html",
                        controller: 'SqliteCtrl'
                    }
                }
            })

            .state('polyclinique.toast', {
                url: "/polyclinique/toast",
                views: {
                    'tab-booking': {
                        templateUrl: "app/polyclinique/templates/toast.html",
                        controller: 'ToastCtrl'
                    }
                }
            })

            .state('polyclinique.vibrate', {
                url: "/polyclinique/vibrate",
                views: {
                    'tab-booking': {
                        templateUrl: "app/polyclinique/templates/vibrate.html",
                        controller: 'PolycliniqueController'
                    }
                }
            });
    }

})();

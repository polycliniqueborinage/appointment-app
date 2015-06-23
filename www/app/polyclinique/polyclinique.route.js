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

            .state('tab.polyclinique', {
                url: "/polyclinique",
                views: {
                    'tab-polyclinique': {
                        templateUrl: "app/polyclinique/templates/main.html"
                    }
                }
            })

            .state('tab.polyclinique-services', {
                url: "/polyclinique/services",
                views: {
                    'tab-polyclinique': {
                        templateUrl: "app/polyclinique/templates/services.html",
                        controller: 'PolycliniqueServiceController'
                    }
                }
            })

            .state('tab.polyclinique-doctors', {
                url: "/polyclinique/doctors",
                views: {
                    'tab-polyclinique': {
                        templateUrl: "app/polyclinique/templates/doctors.html",
                        controller: 'PolycliniqueDoctorController'
                    }
                }
            })

            .state('tab.polyclinique-doctor', {
                url: "/polyclinique/doctors/:doctor",
                views: {
                    'tab-polyclinique': {
                        templateUrl: "app/polyclinique/templates/doctor.html",
                        controller: 'PolycliniqueDoctorController'
                    }
                }
            })









            .state('tab.polyclinique-device', {
                url: "/polyclinique/device",
                views: {
                    'tab-polyclinique': {
                        templateUrl: "app/polyclinique/templates/device.html",
                        controller: 'DeviceCtrl'
                    }
                }
            })

            .state('tab.polyclinique-battery', {
                url: "/polyclinique/battery",
                views: {
                    'tab-polyclinique': {
                        templateUrl: "app/polyclinique/templates/battery.html",
                        controller: 'BatteryCtrl'
                    }
                }
            })

            .state('tab.polyclinique-camera', {
                url: "/polyclinique/camera",
                views: {
                    'tab-booking': {
                        templateUrl: "app/polyclinique/templates/camera.html",
                        controller: 'CameraCtrl'
                    }
                }
            })

            .state('tab.polyclinique-motion', {
                url: "/polyclinique/motion",
                views: {
                    'tab-booking': {
                        templateUrl: "app/polyclinique/templates/motion.html",
                        controller: 'MotionCtrl'
                    }
                }
            })

            .state('tab.polyclinique-notifications', {
                url: "/polyclinique/notifications",
                views: {
                    'tab-booking': {
                        templateUrl: "app/polyclinique/templates/notification.html",
                        controller: 'NotificationsCtrl'
                    }
                }
            })

            .state('tab.polyclinique-network', {
                url: "/polyclinique/network",
                views: {
                    'tab-booking': {
                        templateUrl: "app/polyclinique/templates/network.html",
                        controller: 'NetworkCtrl'
                    }
                }
            })

            .state('tab.polyclinique-pin', {
                url: "/polyclinique/pin",
                views: {
                    'tab-booking': {
                        templateUrl: "app/polyclinique/templates/pin.html",
                        controller: 'PinCtrl'
                    }
                }
            })

            .state('tab.polyclinique-share', {
                url: "/polyclinique/share",
                views: {
                    'tab-booking': {
                        templateUrl: "app/polyclinique/templates/share.html",
                        controller: 'ShareCtrl'
                    }
                }
            })

            .state('tab.polyclinique-sqlite', {
                url: "/polyclinique/sqlite",
                views: {
                    'tab-booking': {
                        templateUrl: "app/polyclinique/templates/sqlite.html",
                        controller: 'SqliteCtrl'
                    }
                }
            })

            .state('tab.polyclinique-toast', {
                url: "/polyclinique/toast",
                views: {
                    'tab-booking': {
                        templateUrl: "app/polyclinique/templates/toast.html",
                        controller: 'ToastCtrl'
                    }
                }
            })

            .state('tab.polyclinique-vibrate', {
                url: "/polyclinique/vibrate",
                views: {
                    'tab-booking': {
                        templateUrl: "app/polyclinique/templates/vibrate.html",
                        controller: 'VibrateCtrl'
                    }
                }
            });
        /*


         .state('tab.device', {
         url: "/device",
         views: {
         'tab-dashboard': {
         templateUrl: "app/polyclinique/templates/device.html"
         }
         }
         });
         .state('tab-device', {
                url: "/tab/device",
                views: {
                    'tab-dashboard': {
                        templateUrl: "app/polyclinique/templates/device.html",
                        controller: 'DeviceCtrl'
                    }
                }
            })

            .state('polyclinique-battery', {
                url: "/polyclinique/battery",
                views: {
                    'tab-dashboard': {
                        templateUrl: "app/polyclinique/templates/battery.html",
                        controller: 'BatteryCtrl'
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
                        templateUrl: "app/polyclinique/templates/notification.html",
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
            });*/
    }

})();

(function() {
    'use strict';

    angular
        .module('pcb.booking')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // Booking.
            .state('tab.bookings', {
                url: "/bookings",
                views: {
                    'tab-booking': {
                        templateUrl: "app/booking/templates/main.html"
                    }
                }
            })

            // All speciality.
            .state('tab.bookings-specialities', {
                url: "/bookings/specialities",
                views: {
                    'tab-booking': {
                        templateUrl: "app/booking/templates/speciality.html",
                        controller: 'BookingSpecialityController'
                    }
                }
            })

            // All doctors by speciality.
            .state('tab.bookings-specialities-doctors', {
                url: "/bookings/specialities/:speciality/doctors",
                views: {
                    'tab-booking': {
                        templateUrl: "app/booking/templates/doctor.html",
                        controller: 'BookingDoctorController'
                    }
                }
            })

            // All doctors.
            .state('tab.bookings-doctors', {
                url: "/bookings/doctors",
                views: {
                    'tab-booking': {
                        templateUrl: "app/booking/templates/doctor.html",
                        controller: 'BookingDoctorController'
                    }
                }
            })

            .state('tab.bookings-doctors-slot', {
                url: '/bookings/slots/:id',
                views: {
                    'tab-booking': {
                        templateUrl: "app/booking/templates/slot.html",
                        controller: 'BookingSlotController'
                    }
                }
            });
    }

})();

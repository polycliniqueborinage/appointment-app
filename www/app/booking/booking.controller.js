(function () {
    'use strict';

    angular
        .module('pcb.booking')
        .controller('BookingController', BookingController);

    BookingController.$inject = ['$scope'];

    function BookingController($scope) {

        activate();
        ////////////////////////////////////////////////////////////////////////







        function activate() {
            console.log('BookingController');
        }
    }

})();

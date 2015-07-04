(function () {
    'use strict';

    angular
        .module('pcb.booking')
        .controller('BookingController', BookingController);

    BookingController.$inject = ['$scope', '$log'];

    function BookingController($scope, $log) {

        $scope.class = 'booking';

        activate();
        ////////////////////////////////////////////////////////////////////////







        function activate() {
            $log.debug('BookingController');
        }
    }

})();

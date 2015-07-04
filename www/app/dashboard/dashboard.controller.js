(function () {
    'use strict';

    angular
        .module('pcb.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', '$ionicPlatform', '$cordovaDevice', '$log'];

    function DashboardController($scope, $ionicPlatform, $cordovaDevice, $log) {

        $scope.class = 'dashboard';

        activate();
        ////////////////////////////////////////////////////////////////////////





        function activate() {
            $log.debug('DashboardController');
        }
    }

})();

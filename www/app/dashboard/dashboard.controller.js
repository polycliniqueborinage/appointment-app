(function () {
    'use strict';

    angular
        .module('pcb.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', '$ionicPlatform', '$cordovaDevice'];

    function DashboardController($scope, $ionicPlatform, $cordovaDevice) {

        activate();
        ////////////////////////////////////////////////////////////////////////





        function activate() {
            console.log("activate");
            $ionicPlatform.ready(function() {
                $scope.$apply(function() {
                    // Sometimes binding does not work! :/

                    // Getting device infor from $cordovaDevice.
                    var device = $cordovaDevice.getDevice();

                    $scope.manufacturer = device.manufacturer;
                    $scope.model = device.model;
                    $scope.platform = device.platform;
                    $scope.uuid = device.uuid;

                });

            });
        }
    }

})();

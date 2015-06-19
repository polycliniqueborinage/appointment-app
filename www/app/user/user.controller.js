(function () {
    'use strict';

    angular
        .module('pcb.user')
        .controller('UserController', UserController);

    UserController.$inject = ['$scope', '$ionicModal', '$ionicPlatform', '$cordovaVibration', 'User'];

    function UserController($scope, $ionicModal, $ionicPlatform, $cordovaVibration, User) {

        $scope.loginData = {};

        $scope.login = login;
        $scope.closeLogin = closeLogin;
        $scope.doLogin = doLogin;

        activate();
        ////////////////////////////////////////////////////////////////////////







        function login() {
            $ionicPlatform.ready(function() {
                $scope.vibrateDevice = function() {
                    $cordovaVibration.vibrate(100);
                }
            });
            $scope.modal.show();
        }

        function closeLogin() {
            $scope.modal.hide();
        }

        function doLogin() {
            console.log($scope.loginData);
            User.authenticate($scope.loginData).then(function (data) {
                console.log(data);
            });
        }

        function activate() {
            // Create the login modal that we will use later
            $ionicModal.fromTemplateUrl('app/user/templates/login.html', {
                scope: $scope
            }).then(function(modal) {
                $scope.modal = modal;
            });
        }

        function success() {
            console.log("success");
        }

        function error() {
            console.log("error");
        }
    }

})();

(function () {
    'use strict';

    angular
        .module('pcb.user')
        .controller('UserController', UserController);

    UserController.$inject = ['$scope', '$state', '$ionicModal', '$ionicPlatform', '$ionicPopup', 'User', 'Authentification'];

    function UserController($scope, $state, $ionicModal, $ionicPlatform, $ionicPopup, User, Authentification) {

        /*$scope.profileData = {};
        $scope.loginData = {};

        $scope.login = login;
        $scope.closeLogin = closeLogin;
        $scope.doLogin = doLogin;

        $scope.create = create;*/

        $scope.isAuthenficated = isAuthenficated;
        $scope.logout = logout;

        activate();
        ////////////////////////////////////////////////////////////////////////




        function activate() {
            // Create the login modal that we will use later
            $ionicModal.fromTemplateUrl('app/user/templates/login.html', {
                scope: $scope
            }).then(function(modal) {
                $scope.modal = modal;
            });
        }

        function isAuthenficated() {
            return (Authentification.isAuthentificated()) ? true : false;
        }

        function logout() {
            Authentification.deleteToken();
        }





        function create() {
            // Do validation.
            User.register($scope.profileData).then(
                function(createdUser){
                    Authentification.saveToken(createdUser.token);
                    $state.go('tab.polyclinique-profile');
                },
                function(err){
                    $ionicPopup.alert({
                        title: 'Signup Error',
                        template: err.message
                    });
                });
        }

        function doLogin() {
            User.authenticate($scope.loginData).then(function (data) {
                console.log(data);
            });
        }



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
            User.authenticate($scope.loginData).then(function (data) {
                console.log(data);
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

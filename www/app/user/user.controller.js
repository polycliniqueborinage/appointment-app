(function () {
    'use strict';

    angular
        .module('pcb.user')
        .controller('UserController', UserController);

    UserController.$inject = ['$scope', '$ionicModal', '$timeout', 'User'];

    function UserController($scope, $ionicModal, $timeout, User) {

        $scope.loginData = {};

        $scope.login = login;
        $scope.closeLogin = closeLogin;
        $scope.doLogin = doLogin;

        activate();
        ////////////////////////////////////////////////////////////////////////


        function login() {
            $scope.modal.show();
        }

        function closeLogin() {
            $scope.modal.hide();
        }

        function doLogin() {
            console.log($scope.loginData);
            User.authenticate($scope.loginData).then(function (data) {
                console.log(data);
                $scope.modal.hide();
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
    }

})();

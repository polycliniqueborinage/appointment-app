(function () {
    'use strict';

    angular
        .module('pcb.polyclinique')
        .controller('PolycliniqueController', PolycliniqueController);

    PolycliniqueController.$inject = ['$scope', '$ionicTabsDelegate'];

    function PolycliniqueController($scope, $ionicTabsDelegate) {

        $scope.checkTab = function(){
            console.log('checkTab');
            var active = $ionicTabsDelegate.selectedIndex();
            if (active === 0){
                //$scope.doRefresh();
            }
            else{
                $ionicTabsDelegate.select(0);
            }
        }

        activate();
        ////////////////////////////////////////////////////////////////////////







        function activate() {
            var active = $ionicTabsDelegate.selectedIndex();
        }
    }

})();

(function () {
    'use strict';

    angular
        .module('pcb.polyclinique')
        .controller('PolycliniqueController', PolycliniqueController);

    PolycliniqueController.$inject = ['$scope', '$ionicTabsDelegate', '$log'];

    function PolycliniqueController($scope, $ionicTabsDelegate, $log) {

        $scope.class = 'polyclinique';

        $scope.checkTab = function(){
            console.log('checkTab');
            var active = $ionicTabsDelegate.selectedIndex();
            if (active === 0){
                //$scope.doRefresh();
            }
            else{
                $ionicTabsDelegate.select(0);
            }
        };

        activate();
        ////////////////////////////////////////////////////////////////////////







        function activate() {
            $log.debug('PolycliniqueController');
            // var active = $ionicTabsDelegate.selectedIndex();
        }
    }

})();

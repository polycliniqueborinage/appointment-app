(function () {
    'use strict';

    angular
        .module('pcb.booking')
        .directive('slotItem', slotItem);

    slotItem.$inject = [];

    function slotItem() {

        return {
            templateUrl: 'app/booking/templates/directive/slotItem.html',
            restrict: 'E',
            //scope: {
            //    sessions: '=',
            //    filterObject: '=?',
            //    showTimeSlots: '=?'
            //},
            //controller: function($scope) {
            //    $scope.filterObject = $scope.filterObject || undefined;
            //    $scope.showTimeSlots = $scope.showTimeSlots || false;
            //}
        };
        ////////////////////////////////////////////////////////////////////////

    }

})();

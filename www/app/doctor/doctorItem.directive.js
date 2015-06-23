(function () {
    'use strict';

    angular
        .module('pcb.doctor')
        .directive('doctorItem', doctorItem);

    doctorItem.$inject = [];

    function doctorItem() {

        return {
            templateUrl: 'app/doctor/templates/directives/item.html',
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

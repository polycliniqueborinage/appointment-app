(function () {
    'use strict';

    angular
        .module('pcb.speciality')
        .directive('specialityItem', specialityItem);

    specialityItem.$inject = [];

    function specialityItem() {

        return {
            templateUrl: 'app/speciality/templates/item.html',
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

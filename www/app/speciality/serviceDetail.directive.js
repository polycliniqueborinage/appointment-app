(function () {
    'use strict';

    angular
        .module('pcb.speciality')
        .directive('serviceDetail', serviceDetail);

    serviceDetail.$inject = [];

    function serviceDetail() {

        return {
            templateUrl: 'app/speciality/templates/directives/detail.html',
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

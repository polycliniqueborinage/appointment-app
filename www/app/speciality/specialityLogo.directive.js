(function () {
    'use strict';

    angular
        .module('pcb.speciality')
        .directive('specialityLogo', specialityLogo);

    specialityLogo.$inject = [];

    function specialityLogo() {

        return {
            templateUrl: 'app/speciality/templates/directives/logo.html',
            restrict: 'E',
            scope: {
                label: "@label",
                icon: "@icon"
            }
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

(function () {
    'use strict';

    angular
        .module('pcb.booking')
        .controller('BookingController', BookingController);

    BookingController.$inject = ['$scope'];

    function BookingController($scope) {

        $scope.title = 'title';
        console.log('BookingController');

        ////////////////////////////////////////////////////////////////////////





    }

})();

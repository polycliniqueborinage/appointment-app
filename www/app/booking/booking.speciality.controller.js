(function () {
    'use strict';

    angular
        .module('pcb.booking')
        .controller('BookingSpecialityController', BookingSpecialityController);

    BookingSpecialityController.$inject = ['$scope', 'Speciality'];

    function BookingSpecialityController($scope, Speciality) {

        $scope.specialities = [];

        activate();
        ////////////////////////////////////////////////////////////////////////







        function activate() {
            Speciality.getAll().then(function (data) {
                $scope.specialities = data;
            });
        }
    }

})();

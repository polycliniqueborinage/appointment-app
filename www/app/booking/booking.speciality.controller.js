(function () {
    'use strict';

    angular
        .module('pcb.booking')
        .controller('BookingSpecialityController', BookingSpecialityController);

    BookingSpecialityController.$inject = ['$scope', 'loading', 'Speciality'];

    function BookingSpecialityController($scope, loading, Speciality) {

        $scope.specialities = [];

        activate();
        ////////////////////////////////////////////////////////////////////////







        function activate() {
            loading.show();

            Speciality.getAll().then(function (data) {
                $scope.specialities = data;

                loading.hide();
            });
        }
    }

})();

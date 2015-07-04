(function () {
    'use strict';

    angular
        .module('pcb.booking')
        .controller('BookingAddController', BookingAddController);

    BookingAddController.$inject = ['$scope', '$state', '$ionicPopup', 'Booking', 'Doctor', 'loading', 'Authentification'];

    function BookingAddController($scope, $state, $ionicPopup, Booking, Doctor, loading, Authentification) {

        // Variables.
        $scope.user= {};

        $scope.user.firstname = 'calcus';
        $scope.user.lastname = 'david';
        $scope.user.email = 'calcus.david@gmail.com';
        $scope.user.birthdate = new Date('1978-05-29');

        // Functions.
        $scope.submit = submit;

        activate();
        ////////////////////////////////////////////////////////////////////////










        function activate() {
            loading.show();

            // Get doctor info.
            Doctor.get($state.params.doctor).then(function (data) {
                $scope.doctor = data;
                loading.hide();
            });

            // Authentification.
            if (Authentification.isAuthentificated()) {
                console.log('Authentificated');
            } else {
                console.log('non Authentificated');
            }

            $scope.start = new Date($state.params.start)
            $scope.end = new Date($state.params.end)
        }

        function submit() {
            loading.show();

            Booking.addSlot($scope.user, $scope.doctor, $scope.start, $scope.end).then(
                function(data){
                    console.log(data);
                    // Authentification.saveToken(createdUser.token);
                    // $state.go('tab.polyclinique-profile');
                    loading.hide();
                },
                function(err){
                    $ionicPopup.alert({
                        title: 'Booking Error',
                        template: err.message
                    });
                    loading.hide();
                }
            );

        }
    }

})();

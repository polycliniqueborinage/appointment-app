(function () {
    'use strict';

    angular
        .module('pcb.polyclinique')
        .controller('PolycliniqueMapController', PolycliniqueMapController);

    PolycliniqueMapController.$inject = ['$scope', '$ionicLoading', '$compile' ,'$log'];

    function PolycliniqueMapController($scope, $ionicLoading, $compile, $log) {

        // Functions.
        $scope.centerOnMe = centerOnMe;

        try {
            activate();
        }
        catch(error) {
            $log.error('Could not activate PolycliniqueMapController: ' + error.message);
        }

        ////////////////////////////////////////////////////////////////////////








        function activate() {
            var myLatlng = new google.maps.LatLng(50.41098,3.85577);

            var mapOptions = {
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map"),
                mapOptions);

            //Marker + infowindow + angularjs compiled ng-click
            var contentString = "<div>PolyClinique du Borinage</div>";
            var compiled = $compile(contentString)($scope);

            var infowindow = new google.maps.InfoWindow({
                content: compiled[0]
            });

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: 'PolyClinique du Borinage'
            });

            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });

            $scope.map = map;
        }


        function centerOnMe() {
            if(!$scope.map) {
                return;
            }

            $scope.loading = $ionicLoading.show({
                content: 'Getting current location...',
                showBackdrop: false
            });

            navigator.geolocation.getCurrentPosition(function(pos) {
                $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                $scope.loading.hide();
            }, function(error) {
                $log.error('Unable to get location: ' + error.message);
            });
        };

    }
})();

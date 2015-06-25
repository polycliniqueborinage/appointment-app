(function () {
    'use strict';

    angular
        .module('pcb.polyclinique')
        .controller('PolycliniqueMapController', PolycliniqueMapController);

    PolycliniqueMapController.$inject = ['$scope', '$ionicLoading', '$compile'];

    function PolycliniqueMapController($scope, $ionicLoading, $compile) {

        $scope.centerOnMe = centerOnMe;

        activate();
        ////////////////////////////////////////////////////////////////////////








        function activate() {
            var myLatlng = new google.maps.LatLng(50.41098,3.85577);

            var mapOptions = {
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map"), mapOptions);

            var contentString = "<div></div>";
            var compiled = $compile(contentString)($scope);

            var infowindow = new google.maps.InfoWindow({
                content: compiled[0]
            });

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: 'Polyclinique du Borinage'
            });

            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
            });

            $scope.map = map;
        }

        function centerOnMe() {
            if(!$scope.map) {
                return;
            }

            $ionicLoading.show({
                content: '<i class="icon ion-loading-c"></i>',
                animation: 'fade-in',
                showBackdrop: false,
                maxWidth: 50,
                showDelay: 0
            });

            navigator.geolocation.getCurrentPosition(function(pos) {
                $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                $ionicLoading.hide()
            }, function(error) {
                alert('Unable to get location: ' + error.message);
            });
        }
    }
})();


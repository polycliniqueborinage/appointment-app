(function () {
    'use strict';

    angular
        .module('pcb.core')
        .factory('loading', loading);

    loading.$inject = ['$ionicLoading'];

    function loading($ionicLoading) {
        return {
            show: function() {
                $ionicLoading.show({
                    content: '<i class="icon ion-loading-c"></i>',
                    animation: 'fade-in',
                    showBackdrop: false,
                    maxWidth: 50,
                    showDelay: 0
                });
            },
            hide: function() {
                $ionicLoading.hide();
            }
        }
    }

})();

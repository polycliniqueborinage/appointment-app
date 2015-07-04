(function () {
    'use strict';

    angular
        .module('pcb.core')
        .factory('localstorage', localstorage);

    localstorage.$inject = ['$window'];

    function localstorage($window) {
        return {
            set: function(key, value) {
                $window.localStorage[key] = value;
            },
            get: function(key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            },
            delete: function(key) {
                delete window.localStorage[key]
            },
            setObject: function(key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },
            getObject: function(key) {
                return JSON.parse($window.localStorage[key] || '{}');
            },
            setTemporalyObject: function(key, value, expires) {
                if (expires==undefined || expires=='null') {
                    var expires = 3600;
                }

                var date = new Date();
                var expiration = Math.round((date.setSeconds(date.getSeconds() + expires))/1000);

                $window.localStorage[key +'_time'] = expiration;
                $window.localStorage[key] = JSON.stringify(value);
            },
            getTemporalyObject: function(key) {
                var date = new Date();
                var current = Math.round(+date/1000);

                var stored_time = localStorage.getItem(key + '_time');
                if (stored_time == undefined || stored_time == 'null') {
                    var stored_time = 0;
                }

                if (stored_time < current) {
                    return false;
                } else {
                    return JSON.parse($window.localStorage[key] || false);
                }
            }
        }
    }

})();

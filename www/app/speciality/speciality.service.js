(function () {
    'use strict';

    angular
        .module('pcb.speciality')
        .factory('Speciality', Speciality);

    Speciality.$inject = ['$q', '$http', 'Dataservice'];

    function Speciality($q, $http, Dataservice) {

        var apiURL = '/specialities';
        var config = {};

        var speciality = {
            getAll: getAll
        };

        return speciality;

        ////////////////////////////////////////////////////////////////////////







        function getAll () {
            return Dataservice.get(apiURL, config).then(function (data) {
                return data;
            });
        };

    }

})();

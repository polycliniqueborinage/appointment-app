(function () {
    'use strict';

    angular
        .module('pcb.booking')
        .factory('Booking', Booking);

    Booking.$inject = ['$q', '$http'];

    function Booking($q, $http) {

        var apiURL = 'http://local.drupal8:8888/feeds';
        var config = {};

        var timestamp = _.now();

        var feeds = [];
        var feedsPosition = 0;
        var feedsPagination = 20;
        var feedsLength = 0;
        var feedsOrderBy = 'title';

        var feedsCache = DSCacheFactory('feedsCache', {
            storageMode: "localStorage",
            // 10 Minutes, 600000.
            maxAge: 600000,
            deleteOnExpire: 'aggressive',
            onExpire: function (key, value) {
                httpRequest()
                    .then(function(){
                        logger.success("Feeds Cache was automatically refreshed", new Date());
                    }, function(){
                        logger.error("Error getting data. Putting expired feeds back in the cache", new date());
                        feedsCache.put(key, value);
                    });
            }
        });

        var feeds = {
            hasMoreData: hasMoreData,
            load: load
        };

        return feeds;
        ////////////////////////////////////////////////////////////////////////



        function hasMoreData () {
            return (feedsLength >= feedsPosition);
        };

        function load (forceRefresh, resetPagination) {
            logger.info('load');
            // In both case we want to return a promise.
            // If no feeds or force to reload we will make a http request to the api.
            if (!feedsCache.get("feeds") || forceRefresh) {
                // If we refresh, rest pagination.
                feedsPosition = 0;
                return httpRequest().then(retrieve);
            } else {
                if (resetPagination) {
                    feedsPosition = 0;
                }
                return $q.when('yeah baby').then(retrieve);
            }
        };

        function httpRequest () {
            logger.info('httpRequest');
            return $http.get(apiURL, config)
                .then(httpRequestSuccess, httpRequestError);
        };

        function httpRequestSuccess (response) {
            logger.info('httpRequestSuccess');
            feedsLength = response.data.length;
            feedsCache.put('feeds', response.data);
            feedsCache.put('feedsLength', feedsLength);
        };

        function httpRequestError () {
            logger.info('httpRequestError');
        };

        function retrieve () {
            logger.info('retrieve');
            feeds = feedsCache.get('feeds');
            feedsLength = feedsCache.get('feedsLength');
            feedsPosition += feedsPagination;
            feedsOrderBy = FeedsPreferences.getOrderBy();

            if (feedsOrderBy == 'title') {
                feeds = _.sortBy(feeds, function(o) { return o.title; })
            }

            if (feedsOrderBy == 'field_date') {
                feeds = _.sortBy(feeds, function(o) { return o.field_date; })
            }

            if (feedsOrderBy == 'field_rate') {
                feeds = _.sortBy(feeds, function(o) { return o.field_rate; })
            }

            return _.first(feeds, feedsPosition);
        };

    }

})();

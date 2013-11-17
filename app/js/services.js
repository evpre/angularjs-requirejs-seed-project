'use strict';

/* Services */
define(["angular", "angular-resource"], function(angular){

    var services = angular.module('services', ['ngResource']);

    services.factory('Movie', ['$resource',
      function($resource){
        return $resource('movies/movies.json', {}, {
          query: {method:'GET', params:{}, isArray:true}
        });
      }]);

    return services;
})

'use strict';

define(["angular"], function(angular){

    /* Filters Module*/
    var filters = angular.module('filters', [])

        .filter('checkmark', function() {
          return function(input) {
            return input ? '\u2713' : '\u2718';
          };
        });

    return filters;
})
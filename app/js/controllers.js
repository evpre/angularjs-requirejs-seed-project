'use strict';

/* Controllers */
define(["angular", "js/services"], function(angular){

    var controllers = angular.module('controllers', ["services"]);

    controllers.controller('MoviesListPresenter', ['$scope', 'Movie',
      function($scope, Movie) {
        $scope.movies = Movie.query();
      }]);

    return controllers;
})



'use strict';

define(["angular", "angular-resource", "angular-route","js/controllers", "js/filters",
    "controllers/MoviesListPresenter"
], function(angular){
    /* App Module */
    var moviesApp = angular.module('moviesApp', [
        'ngResource',
        'ngRoute',

        'controllers',
        'filters'
    ]);

    moviesApp.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.
          when('/movies', {
            templateUrl: 'partials/movies-list.html',
            controller: 'MoviesListPresenter'
          }).
          otherwise({
            redirectTo: '/movies'
          });
      }]);

    angular.bootstrap(document, ['moviesApp']);
    return moviesApp;
})
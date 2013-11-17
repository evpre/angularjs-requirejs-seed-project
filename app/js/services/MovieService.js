/**
 * Created by jonny on 17/11/13.
 */
define(["angular", "js/services"], function(angular, services){

    services.factory('Movie', ['$resource',
        function($resource){
            return $resource('movies/movies.json', {}, {
                query: {method:'GET', params:{}, isArray:true}
            });
        }
    ]);
})
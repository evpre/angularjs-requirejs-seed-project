/**
 * Created by jonny on 16/11/13.
 */

requirejs.config({

    baseUrl: './',

    paths: {
        app: 'js/app',
        jquery: "lib/jquery/jquery-1.10.2.min",
        angular: "lib/angular/angular",
        "angular-resource": "lib/angular/angular-resource",
        "angular-route": "lib/angular/angular-route",
        controllers: "js/controllers/",
        services: "js/services/",
        filters: "js/filters/"
        //models: "lib/models",
        //views: "lib/views"
    },
    shim: {
        "angular": {
            deps: ["jquery"],
            exports: "angular"
        },
        "angular-resource": {
            deps: ["angular"]
        },
        "angular-route": {
            deps: ["angular"]
        }
    }
});

requirejs([
    "app"
]);

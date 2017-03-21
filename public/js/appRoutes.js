angular.module('appRoutes', ['ui.router'])
    .config(function($stateProvider, $locationProvider) {
        $stateProvider
            .state({
                name: 'home',
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })

    });

// public/js/appRoutes.js
angular.module('appRoutes', [])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider

        // home page
            .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })

        // nerds page that will use the NerdController
        .when('/nerds', {
            templateUrl: 'views/nerd.html',
            controller: 'NerdsCtrl'
        });

        $locationProvider.html5Mode(true);

    }]);

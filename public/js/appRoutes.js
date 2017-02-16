angular.module('angRoutes', [])
    .config(['$routeProvider', '$locationProvider', function($urlProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'mainCtrl.html'
            }),

            .when('/foods', {
                templateUrl: 'views/foods.html',
                controller: 'FoodCtrl.html'
            })

        $locationProvider.html5Mode(true);
    }]);

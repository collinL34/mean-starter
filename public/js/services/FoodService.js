angular.module('foodModule', [])
    .factory('food', ['$http', function($http) {
        return {
            get : funtion() {
                return $http.get('/api/foods')
            },

            create : function(foodData) {
                return $http.post('/api/foods', foodData)
            },

            delete : function(id) {
                return $http.delete('/api/foods/' + id)
            }
        };

    }])

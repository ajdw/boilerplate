app.
    service('Service', ['$http', function($http){

        return {
            posts: function(value){
                var d = $http.get(value);
                d.then(function(res){
                    return {
                        data: res.data
                    }
                });
                return d;
            },
            albums: function(value){
                var d = $http.get(value);
                d.then(function(res){
                    return {
                        data: res.data
                    }
                });
                return d;
            },
            todos: function(value){
                var d = $http.get(value);
                d.then(function(res){
                    return {
                        data: res.data
                    }
                })
                return d;
            }
        }

}]);
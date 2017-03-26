app
    .controller('todoCtrl', ['$scope','Service', function($scope,Service){
        $scope.url = 'https://jsonplaceholder.typicode.com';
        Service.todos($scope.url + '/todos').
            then(function(res){
                $scope.todos = res.data;
                console.log('TODOS: ',$scope.todos)
            })
    }]);
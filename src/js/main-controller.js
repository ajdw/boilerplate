app.
    controller('mainCtrl', ['$scope','Service', function($scope,Service){
        $scope.user = 'Daniel';
        $scope.url = 'https://jsonplaceholder.typicode.com';
        Service.posts($scope.url + '/posts').
            then(function(res){
                console.log(res)
                $scope.posts = res.data;
            })
        Service.albums($scope.url + '/albums').
            then(function(res){
                console.log(res)
                $scope.albums = res.data;
            })
}]);
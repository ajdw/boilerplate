app.
    controller('navCtrl', ['$scope','$routeParams', function($scope,$routeParams){
        $scope.anything = $routeParams.id;
}]);
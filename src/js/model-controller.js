app.
    controller('modelCtrl', ['$scope', function($scope){
        $scope.person = {
            name: 'Daniel',
            age: 29,
            job: 'Software Engineer',
            company: 'Williams-Sonoma'
        };
        $scope.$watch('person', function(newVal,oldVal){    
            console.log('NEW VAL',newVal)
            console.log('OLD VAL',oldVal)
        }, true);
    }]);
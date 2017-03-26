app.
    config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/posts', {
                templateUrl: 'html/posts.html',
                controller: 'mainCtrl'
            }).
            when('/something', {
                templateUrl: 'html/something.html',
                controller: 'mainCtrl'
            }).
            when('/todos', {
                templateUrl: 'html/todos.html',
                controller: 'todoCtrl' 
            }).
            when('/model', {
                templateUrl: 'html/model.html',
                controller: 'modelCtrl'
            }).
            when('/:id', {
                templateUrl: 'html/error.html',
                controller: 'navCtrl'
            }).
            otherwise({
                template: '<h1>None<h1><p>Nothing has been selected</p>'
            });
    }])

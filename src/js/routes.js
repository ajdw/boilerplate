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
            when('/:id', {
                templateUrl : 'html/error.html',
                controller: 'navCtrl'
            }).
            otherwise({
                template: '<h1>None<h1><p>Nothing has been selected</p>'
            });
    }])

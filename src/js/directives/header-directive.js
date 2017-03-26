app.
    directive('heading', function(){
        return {
            restrict: 'EAC',
            templateUrl: 'html/header.html',
            scope: {
                user: '=user'
            }
        }
});
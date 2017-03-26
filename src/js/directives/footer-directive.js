app.
    directive('end', function(){
        return {
            restrict: 'EAC',
            templateUrl: 'html/footer.html',
            scope: {
                user: '=user'
            }
        }
});
var LoginController = function ($scope, $rootScope, AuthService, $location) {
    $scope.credentials = {
        userName: ''
    };
    $scope.addNameError = "";

    $scope.login = function (credentials) {
        AuthService.login(credentials).then(function (user) {
            $scope.credentials.userName = "";
            $scope.addNameError = "";
            $rootScope.isAuthenticated = true;
            $location.path("/");
        }, function () {
            $scope.addNameError = "couldn't log in";
        });
    }
}

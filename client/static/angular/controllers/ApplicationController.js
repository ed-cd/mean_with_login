var ApplicationController = function ($rootScope, $scope, AuthService, $location) {
    $scope.currentUser = null;
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = AuthService.isAuthorized;

    $scope.setCurrentUser = function (user) {
        $scope.currentUser = user;
    };

    $scope.logout = function () {
        AuthService.logout().then(function () {
            $rootScope.isAuthenticated = false;
            $location.path("/login");
        })
    }

    $scope.PAGE_TEXT = PAGE_TEXT;
}

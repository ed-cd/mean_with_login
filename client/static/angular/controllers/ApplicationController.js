var ApplicationController = function ($scope, AuthService, $location) {
    $scope.currentUser = null;
    $scope.userRoles = USER_ROLES;
    $scope.isAuthenticated = AuthService.isAuthenticated;

    $scope.setCurrentUser = function (user) {
        $scope.currentUser = user;
    };

    $scope.logout = function () {
        AuthService.logout().then(function () {
            $location.path("/login");
        })
    }

    $scope.PAGE_TEXT = PAGE_TEXT;
}

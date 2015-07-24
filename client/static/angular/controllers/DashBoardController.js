var DashBoardController = function ($scope, CategoriesFactory, AuthService, TopicsService) {
    $scope.categories = [];
    $scope.userName = AuthService.getUserName();
    $scope.newTopic = {};

    CategoriesFactory.getCategories(function getCategoriesCallback(data) {
        $scope.categories = data;
    })

    $scope.addTopic = function (valid) {
        if (valid) {
            $scope.newTopic.userName = $scope.userName;
            TopicsService.addTopic($scope.newTopic).then(function (data) {
                $scope.newTopic = {};
            })
        }
    }
}

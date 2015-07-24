var TopicsService = function ($http) {
    var availiableProducts = null;

    this.addTopic = function (newTopic) {
        return $http.post("/addTopic", newTopic).success(function (data) {
            return true;
        }).error(function (data) {
            return false;
        })
    }
}

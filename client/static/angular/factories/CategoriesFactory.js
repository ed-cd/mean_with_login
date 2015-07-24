var CategoriesFactory = function ($http) {
    var categories = [];
    var factory = {};

    factory.getCategories = function (callback) {
        $http.get('/getCategories').success(function (output) {
            for (var i in output) {
                categories.push(output[i].name);
            }
            callback(categories);
        })
    }
    return factory;
}

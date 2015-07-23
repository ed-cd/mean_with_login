var MainRoutes = function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "angular/views/customers.html"
    }).when("/products", {
        templateUrl: "angular/views/products.html"
    }).when("/orders", {
        templateUrl: "angular/views/orders.html"
    }).when("/login", {
        templateUrl: "angular/views/loginForm.html"
    }).otherwise({
        redirectTo: "/"
    })
}

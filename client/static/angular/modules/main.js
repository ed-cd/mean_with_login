var myAppModule = angular.module('myApp', ['ngRoute', "underScore", "ngCacheBuster"]).config(function (httpRequestInterceptorCacheBusterProvider) {
    httpRequestInterceptorCacheBusterProvider.setMatchlist([/.*images.*/]);
});
myAppModule.config(["$routeProvider", MainRoutes]);
myAppModule.service("AuthService", AuthService);
myAppModule.service("ProductsService", ProductsService);
myAppModule.service("CustomersService", CustomersService);
myAppModule.service("TopicsService", TopicsService);
myAppModule.service("SessionService", SessionService);
myAppModule.factory("OrdersFactory", OrdersFactory);
myAppModule.factory("CategoriesFactory", CategoriesFactory);
myAppModule.controller('ApplicationController', ApplicationController);
myAppModule.controller('CustomersController', CustomersController);
myAppModule.controller('OrdersController', OrdersController);
myAppModule.controller('ProductsController', ProductsController);
myAppModule.controller('LoginController', LoginController);
myAppModule.controller('DashBoardController', DashBoardController);
myAppModule.filter('RangeFilter', RangeFilter);
myAppModule.filter('FieldGreaterThanFilter', FieldGreaterThanFilter);
myAppModule.constant(PAGE_TEXT);
myAppModule.constant(AUTH_EVENTS);
myAppModule.constant(USER_ROLES);

myAppModule.run(function ($rootScope, AuthService, $location, $interval) {
    AuthService.check().then(function _redirectToMain() {
        $location.path("/");
    })
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        if (!AuthService.isAuthenticated()) {
            $location.path("/login");
        }
    })
})

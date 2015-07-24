module.exports = function (app) {
    var customers = require('../controllers/customers');
    var products = require("../controllers/products");
    var orders = require("../controllers/orders");
    var login = require("../controllers/login");
    var category = require("../controllers/categories");
    var topic = require("../controllers/topics");
    var post = require("../controllers/posts");

    app.get("/", function (req, res) {
        owls.showAll(req, res);
    })

    app.get('/customers', function (req, res) {
        customers.show(req, res);
    })

    app.post("/addCustomer", function (req, res) {
        customers.add(req, res);
    })

    app.post("/removeCustomer", function (req, res) {
        customers.remove(req, res);
    })

    app.get("/availiableProducts", function (req, res) {
        products.showAvailiable(req, res);
    })

    app.get("/allProducts", function (req, res) {
        products.showAll(req, res);
    })

    app.post("/addProduct", function (req, res) {
        products.add(req, res);
    })

    app.post("/orders", function (req, res) {
        orders.add(req, res);
    })

    app.get("/orders", function (req, res) {
        orders.show(req, res);
    })

    app.post("/login", function (req, res) {
        login.login(req, res);
    })

    app.get("/logout", function (req, res) {
        login.logout(req, res);
    })

    app.get("/checkLogin", function (req, res) {
        login.check(req, res);
    })

    app.get("/getCategories", function (req, res) {
        category.get(req, res);
    })

    app.post("/addTopic", function (req, res) {
        topic.add(req, res);
    })

    app.get("/addPost", function (req, res) {
        post.add(req, res);
    })
}

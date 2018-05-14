const app = angular.module("myApp", []);

app.controller("MainController", ["$http", function($http){

    this.includePath = 'partials/projects.html';
    this.changeInclude = (path) => {
        console.log("calling function");
        this.includePath = 'partials/' + path + '.html';
    };
}]);

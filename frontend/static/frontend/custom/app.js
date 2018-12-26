var app = angular.module("frontApp", ['ui.bootstrap']);
app.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});
app.controller("FrontCtrl", function () {
    var ac = this;
    ac.mssg = "Hello moon!";
});

/**
 * Created by Goreev on 16.12.2015.
 */
var app=angular.module('flapperNews', ['ui.router']);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.ejs',
                controller: 'MainCtrl'
            })
            .state('posts', {
                url: '/posts/{id}',
                templateUrl: 'views/posts.ejs',
                controller: 'PostsCtrl'
            });
        $urlRouterProvider.otherwise('/home');
    }]);




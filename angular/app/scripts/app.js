'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
  .module('angularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function($stateProvider) {
    $stateProvider
      .state('/', {
        url: "/",
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
        
      })
      .state('about', {
        url: "/about",
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
       
      })
      
      .state('contact', {
        url: "/contact",
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
        
      })
      .state('signup', {
        url: "/signup",
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
       
      })
      .state('login', {
        url: "/login",
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
        
      })
      // .otherwise({
      //   redirectTo: });'/'
      
  });

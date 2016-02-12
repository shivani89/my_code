'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('SignupCtrl', [function () {
   
   var self = this;
              self.submit = function() {
                  console.log('Form is submitted with following user', self.user);
                  
            };

  }]);

'use strict';

/**
 * @ngdoc directive
 * @name pouchdb-test.directive:test
 * @description
 * # test
 */
angular.module('pouchdb.test', ['pouchdb'])
  .directive('test', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the test directive');
      }
    };
  });

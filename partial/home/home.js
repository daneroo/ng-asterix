angular.module('asterix').controller('HomeCtrl', function($scope, mockdb) {
  'use strict';

  $scope.persos = [];
  mockdb.promise.then(function() {
    $scope.persos = mockdb.getPersos();
  });

});
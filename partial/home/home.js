angular.module('asterix').controller('HomeCtrl', function($scope, mockdb) {
  'use strict';

  $scope.perso = [];
  // $scope.perso = mockdb.getPerso();
  mockdb.promise.then(function(data) {
    $scope.perso = data;
    console.log('resolved', $scope.perso);
  })


});
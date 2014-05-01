angular.module('asterix').controller('PersoCtrl', function($scope, $stateParams, mockdb) {
  'use strict';

  mockdb.promise.then(function() {
    // id from stateparams - cast to int
    var id = +$stateParams.id;
    $scope.perso = mockdb.getPerso(id);
  });



});
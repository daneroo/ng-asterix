angular.module('asterix').controller('PersoCtrl', function($scope, $stateParams, mockdb) {
  'use strict';

  mockdb.promise.then(function() {
    // id from stateparams - cast to int
    var id = +$stateParams.id;
    console.log('$stateParams',$stateParams);
    $scope.perso = mockdb.getPerso(id);
    console.log('resolved', $scope.perso);
  });



});
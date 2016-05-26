'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
/*   ,resolve:{
      'items':['itemService',function(itemService){
      return itemService.getItems();
       }]

    }*/
  });
}])

.controller('View1Ctrl',['$scope','$http','itemService',function($scope,$http,itemService) {

    $scope.getItems =function() {
        $http.get("items.json").success(function(resp) {
            console.log(resp);
            $scope.items= resp.items;
        });
    };
    $scope.getItems();
    console.log($scope.items);



  $scope.remove = function(index) {
    $scope.items.splice(index, 1);
  };
}]);
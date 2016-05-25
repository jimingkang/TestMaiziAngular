'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  /*  ,resolve:{
      'items':['itemService',function(itemService){
      return itemService.getItems();
       }]

    }*/
  });
}])

.controller('View1Ctrl','itemService', [function($scope,itemService) {
    function constructor() {
        $scope.items=[
            {title: 'Pots', quantity: 8, price: 3.95},
            {title: 'Dots', quantity: 17, price: 12.95},
            {title: 'Pebbels', quantity: 5, price: 6.95}
        ];
    };

  $scope.remove = function(index) {
    $scope.items.splice(index, 1);
  };
}]);
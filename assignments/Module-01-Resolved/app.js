(function () {
  'use strict';

  angular.module('LunchCheckApp', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.pHold = "list comma-separated items ie. item1,item2,etc.";


    $scope.checkFood = function () {

      if(!$scope.items)
      {
        $scope.emptyMessage = "Please enter data first";
        $scope._Color = "red";
        return;
      };

      const words = $scope.items.split(',');
      if(words.length <= 3)
      {
        $scope.emptyMessage = "Enjoy!";
        $scope._Color = "green";
        console.log(words);
      }
      else if(words.length > 3)
      {
        $scope.emptyMessage = "Too much!";
        $scope._Color = "orange";
        console.log(words);
      }
    };

  };

})();

var myApp = angular.module("myApp",[]);

myApp.controller("DataController", ["$scope", "$http", "$location",
  function($scope, $http, $location) {
}]);



$scope.loaded = false;
$http.get('https://api.myjson.com/bins/54jf7').success(function(data){
  $scope.movies = data;
  $scope.loaded = true;
});

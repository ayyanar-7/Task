var app = angular.module("test", []);
app.controller("t", function($scope){
    $scope.change = function(){
        var input = prompt("Enter a name here:");
        if(input) $scope.name = input;
    }
});
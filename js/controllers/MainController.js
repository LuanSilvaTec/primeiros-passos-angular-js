app.controller('MainController',['$scope',function($scope){
    $scope.list = ["Test one","Test two","test three"];
    $scope.addItem = function(){
        $scope.list.push($scope.addToDo)
    }
}])
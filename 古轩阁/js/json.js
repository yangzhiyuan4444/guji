 angular.module("myApp",[]).controller("myCtrl",["$scope","$http",function($scope,$http){
           $http.get("data/index.json").then(function(res){
             	return res.data;
            }).then(function(res){
             	console.log(res);
             	$scope.pro=res;
             })
        }])
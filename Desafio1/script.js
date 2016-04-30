
var app=angular.module("desafio",[]);
  
app.controller("FormController", ['$scope',function($scope){

	//Visivilidad de boton confirmar
	$scope.confirm = true;

	//Submit de formulario
	$scope.submit = function() {

		$scope.name=$scope.user.name;
		$scope.lastName = $scope.user.lastName;
		$scope.email = $scope.user.email;
		$scope.dir1 = $scope.user.dir1;
		$scope.dir2 = $scope.user.dir2;

		$scope.user.name = '';
		$scope.user.lastName = '';
		$scope.user.email = '';
		$scope.user.dir1 = '';
		$scope.user.dir2 = '';
		
	};

	//Muestra alerta y oculta botón
	$scope.showAlert = function() {
		$scope.confirm = false;
		alert("q xuxas");
	};

	//Limpia variables
	$scope.clean = function() {
		$scope.name = "";
		$scope.user = "";
		$scope.lastName = "";
		$scope.email = "";
		$scope.dir1 = "";
		$scope.dir2 = "";
	};


}]);

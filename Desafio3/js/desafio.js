
angular.module("desafio",['ngMessages'])
	.controller("formController",function(){

		var vCtrl = this,
            /**
            * Inicializa los objetos utilizados para el despliegue de datos en la vista
            */
            init = function () {
                //Visivilidad de boton confirmar
                vCtrl.confirmButton = true;
                vCtrl.regionList = regiones;
                vCtrl.communeList = comunas;
                vCtrl.inputData = {};
                vCtrl.showData = {};
                vCtrl.region = "";
                vCtrl.commune = "";
            };

		//Submit de formulario
		vCtrl.submit = function() {

			vCtrl.inputData.commune = vCtrl.commune.code;
			vCtrl.inputData.region = vCtrl.region.code;
			//Concatena comuna + region en direccion 2
			vCtrl.inputData.dir2 = vCtrl.commune.name +', ' + vCtrl.region.name;

			vCtrl.showData = angular.copy(vCtrl.inputData);
            
            // Cambia el valor de la variable para despliegue del botón de confirmación
            vCtrl.confirmButton = true;
			
		};

		//Muestra alerta y oculta botón
		vCtrl.showAlert = function() {
			vCtrl.confirmButton = false;
			alert("datos guardados");
		};

		//Limpia variables
		vCtrl.clean = function() {
            init();
            return true;
		};

		vCtrl.selectedRegion = function(data){
			console.log("DATA:",data);
		};

		init();

	});

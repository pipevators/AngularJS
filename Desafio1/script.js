
angular.module("desafio",[])
	.controller("formController",function(){

		var vCtrl = this,
            /**
            * Inicializa los objetos utilizados para el despliegue de datos en la vista
            */
            init = function () {
                //Visivilidad de boton confirmar
                vCtrl.confirmButton = true;
                vCtrl.inputData = {};
                vCtrl.showData = {};
            };

		

		//Submit de formulario
		vCtrl.submit = function() {

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
            
            // retorna true para que el flujo del evento continúe normalmente (está asociado 
            // a un botón de tipo reset)
            return true;
		};

		init();

	});

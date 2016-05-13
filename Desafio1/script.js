
angular.module("desafio",[])
	.controller("formController",function(){

		var cForm = this,
            /**
            * Inicializa los objetos utilizados para el despliegue de datos en la vista
            */
            init = function () {
                //Visivilidad de boton confirmar
                cForm.confirmButton = true;
                cForm.inputData = {};
                cForm.showData = {};
            };

		

		//Submit de formulario
		cForm.submit = function() {

			cForm.showData = angular.copy(cForm.inputData);
            
            // Cambia el valor de la variable para despliegue del botón de confirmación
            cForm.confirmButton = true;
			
		};

		//Muestra alerta y oculta botón
		cForm.showAlert = function() {
			cForm.confirmButton = false;
			alert("datos guardados");
		};

		//Limpia variables
		cForm.clean = function() {
            init();
            
            // retorna true para que el flujo del evento continúe normalmente (está asociado 
            // a un botón de tipo reset)
            return true;
		};

		init();

	});

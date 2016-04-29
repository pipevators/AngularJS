
var app=angular.module("store",[]);
  
app.controller("PruebaController",function($scope){
	$scope.mensaje="Hola ";

	this.animals = mamiferos;
});

var mamiferos = [
	{
		name: 'Nutria',
		color: 'Negra',
		available: true,
		price: 123,
		lost: false,
		images: [
	      "images/perro_verde.png",
	      "images/perro_verde.png",
	      "images/gem-09.gif"
	    ]
	},
	{
		name: 'Perro',
		color: 'Verde',
		available: true,
		price: 666,
		lost: false,
		images: [
	      "images/perro_verde.png",
	      "images/gem-05.gif",
	      "images/gem-09.gif"
	    ]
	}
];

// Desafio 2 de AngularJS
// Felipe Rodríguez R.
// Fecha: 11/05/2016

angular.module("desafio", ['ui.bootstrap'])
	//Retorna la primera palabra de una cadena de texto
	.filter('firstWord', function() {
		return function(input) {
			return input.split(' ')[0];
		};
	})
	//Controlador del formulario
	.controller("formController",function($scope){

		var vCtrl = this,
            
            //Inicializa variables
            init = function () {
                vCtrl.editButton = false;
                vCtrl.inputForm = false;
                vCtrl.inputButtons = false;
                vCtrl.inputData = {};
                vCtrl.clientList = clientes;
                vCtrl.index = "";
            };

        //Muestra información de cliente
		vCtrl.showInfo = function(index,client) {
			//Copia información para despliegue en formulario
			vCtrl.inputData = angular.copy(client);
			//Guarda indice del elemento seleccionado
			vCtrl.index = index;
			//Muestra/oculta botones
			vCtrl.editButton = true;
			vCtrl.inputButtons = false;
			vCtrl.inputForm = false;
		};

		//Habilita edición de datos de cliente
		vCtrl.edit = function(){
			vCtrl.editButton = false;
			vCtrl.inputButtons = true;
			vCtrl.inputForm = true;
		};

		//Guarda y actualiza datos en lista de clientes
		vCtrl.save = function(){
			//Actualiza lista de clientes original
			vCtrl.clientList[vCtrl.index + ($scope.currentPage - 1) * 10] = vCtrl.inputData;
			//Vuelve a calcular paginación para que el cambio se vea reflejado
			vCtrl.pagination();
			alert('Datos guardados');
			vCtrl.inputButtons = false;
		};

		//Elimina un cliente de la lista
		vCtrl.delete = function(index){
			vCtrl.clientList.splice(index + ($scope.currentPage - 1) * 10, 1);
			vCtrl.pagination();
		};

		//Limpia variables
		vCtrl.clean = function() {
            vCtrl.inputData.dir1 = '';
            vCtrl.inputData.dir2 = '';
            vCtrl.inputData.rut = '';
            vCtrl.inputData.phone = '';
		};

		init();

		//Corta lista de clientes segun pagina en la que se encuentre
		vCtrl.pagination = function(){
			var begin = (($scope.currentPage - 1) * $scope.numPerPage);
			var end = begin + $scope.numPerPage;
			//Entrega la lista de clientes segun pagina actual
			$scope.filteredClients = vCtrl.clientList.slice(begin, end);
		};

		//Variables de paginación
		$scope.filteredClients = [];
		$scope.currentPage = 1;
		$scope.numPerPage = 10;
		$scope.maxSize = 5;
		
		//Listener para la paginación
		$scope.$watch('currentPage + numPerPage', function() {
			vCtrl.pagination();
		});

	});

//Objeto JSON con los datos de la lista de clientes
var clientes = [
	{
		"names": "Felipe Ignacio",
		"lastNames": "Rodríguez Ramírez",
		"email": "rodriguez.felipe.r@gmail.com",
		"dir1": "Ap #215-3948 Montes, Avenue",
		"dir2": "Santiago"
	},
	{
		"names": "Owen Zane",
		"lastNames": "Blackburn Taylor",
		"email": "libero.Proin.mi@Utsagittislobortis.net",
		"dir1": "Ap #358-7343 Purus Rd.",
		"dir2": "Quintero"
	},
	{
		"names": "Branden Colton",
		"lastNames": "Anthony Ross",
		"email": "Vivamus.euismod@diamdictum.com",
		"dir1": "P.O. Box 130, 894 Magna. Rd.",
		"dir2": "Wekweti"
	},
	{
		"names": "Hakeem Abra",
		"lastNames": "White Roy",
		"email": "ante.ipsum.primis@erat.co.uk",
		"dir1": "Ap #877-5728 Etiam St.",
		"dir2": "Zeitz"
	},
	{
		"names": "Wing Dustin",
		"lastNames": "Walter Foster",
		"email": "auctor.vitae@eratneque.net",
		"dir1": "473-193 Magna. Rd.",
		"dir2": "Kungälv"
	},
	{
		"names": "Alden Hedy",
		"lastNames": "Gallegos Carver",
		"email": "Nam@dolorvitaedolor.com",
		"dir1": "P.O. Box 526, 1912 Pulvinar Rd.",
		"dir2": "Heestert"
	},
	{
		"names": "Lael Garrison",
		"lastNames": "Montoya Riddle",
		"email": "Phasellus.vitae.mauris@eleifendCrassed.co.uk",
		"dir1": "P.O. Box 102, 7552 Pulvinar Rd.",
		"dir2": "Hamoir"
	},
	{
		"names": "Nomlanga Amena",
		"lastNames": "Craig Carpenter",
		"email": "consectetuer@diamnunc.org",
		"dir1": "151-5494 Metus Street",
		"dir2": "Marabá"
	},
	{
		"names": "Nathan Hilary",
		"lastNames": "Flynn Galloway",
		"email": "turpis.egestas@lobortis.ca",
		"dir1": "Ap #329-991 Pellentesque Road",
		"dir2": "Iqaluit"
	},
	{
		"names": "Jacqueline Jelani",
		"lastNames": "Vasquez Mathews",
		"email": "sed.orci.lobortis@natoquepenatibus.co.uk",
		"dir1": "Ap #604-5772 Et Avenue",
		"dir2": "Pietragalla"
	},
	{
		"names": "Kuame Dorian",
		"lastNames": "Spence Richmond",
		"email": "est.tempor.bibendum@egestasSed.co.uk",
		"dir1": "620-1114 Parturient St.",
		"dir2": "Wepion"
	},
	{
		"names": "Hilel Callie",
		"lastNames": "Contreras Simpson",
		"email": "dictum@Morbinequetellus.ca",
		"dir1": "665-1264 Bibendum Av.",
		"dir2": "Sant'Agata sul Santerno"
	},
	{
		"names": "Garrison Madaline",
		"lastNames": "Fletcher Lloyd",
		"email": "tincidunt.dui.augue@ultrices.net",
		"dir1": "114-4989 Rutrum, St.",
		"dir2": "Grangemouth"
	},
	{
		"names": "Herrod Ella",
		"lastNames": "Kline Oneal",
		"email": "Aliquam@rutrumeu.edu",
		"dir1": "180-3768 Curabitur Ave",
		"dir2": "Poederlee"
	},
	{
		"names": "Sydney Zachery",
		"lastNames": "Pierce Santiago",
		"email": "ut.pharetra.sed@lectussit.com",
		"dir1": "3602 Mauris St.",
		"dir2": "Canning"
	},
	{
		"names": "Mariko Mohammad",
		"lastNames": "Buck Shepard",
		"email": "Etiam.gravida.molestie@semmollis.com",
		"dir1": "9771 Facilisis Rd.",
		"dir2": "Butte"
	},
	{
		"names": "Karleigh Gillian",
		"lastNames": "Ashley Hatfield",
		"email": "vestibulum.massa@nislQuisque.ca",
		"dir1": "987 Dui. Avenue",
		"dir2": "Massimino"
	},
	{
		"names": "Barry Ignatius",
		"lastNames": "Walker Fletcher",
		"email": "sit.amet.ultricies@aliquet.org",
		"dir1": "P.O. Box 609, 6315 Arcu Street",
		"dir2": "Mount Isa"
	},
	{
		"names": "Callie Kato",
		"lastNames": "Harvey Strickland",
		"email": "nec.eleifend.non@risusNullaeget.ca",
		"dir1": "Ap #172-3280 Suspendisse Street",
		"dir2": "New Glasgow"
	},
	{
		"names": "Craig Jacob",
		"lastNames": "Clay Herrera",
		"email": "nec@dolor.com",
		"dir1": "2057 Egestas Av.",
		"dir2": "Masullas"
	},
	{
		"names": "Wyatt Felicia",
		"lastNames": "Calderon Francis",
		"email": "lorem@egestasnunc.org",
		"dir1": "673-4745 Ac St.",
		"dir2": "Baranello"
	},
	{
		"names": "Hayfa Cleo",
		"lastNames": "Wilkinson Roberson",
		"email": "risus.Duis@Integervulputaterisus.edu",
		"dir1": "Ap #845-8835 Ante Road",
		"dir2": "Panchià"
	},
	{
		"names": "Dominic Teagan",
		"lastNames": "Wall Travis",
		"email": "quis.diam.Pellentesque@fringillacursuspurus.org",
		"dir1": "9352 Sed, Av.",
		"dir2": "Tirupati"
	},
	{
		"names": "Ulric Britanney",
		"lastNames": "Lara Russell",
		"email": "sapien.Nunc@nequesed.co.uk",
		"dir1": "P.O. Box 439, 4418 Orci. St.",
		"dir2": "Evere"
	},
	{
		"names": "Ryder Leilani",
		"lastNames": "Roach Peterson",
		"email": "magnis@dui.com",
		"dir1": "241-7439 Ligula. Rd.",
		"dir2": "Pirmasens"
	},
	{
		"names": "Kaitlin Rahim",
		"lastNames": "Ayers Marquez",
		"email": "libero.mauris@rhoncus.ca",
		"dir1": "376 Magnis Av.",
		"dir2": "Namur"
	},
	{
		"names": "Evangeline Eden",
		"lastNames": "Maldonado Vang",
		"email": "Quisque@lorem.edu",
		"dir1": "P.O. Box 467, 7418 Vel Road",
		"dir2": "Lanark"
	},
	{
		"names": "Simone Chester",
		"lastNames": "Turner Flynn",
		"email": "at.velit.Pellentesque@estNuncullamcorper.net",
		"dir1": "411-4602 At, Street",
		"dir2": "Dillenburg"
	},
	{
		"names": "Rhea Jolene",
		"lastNames": "May Eaton",
		"email": "eget@magnis.co.uk",
		"dir1": "Ap #615-5502 Cras St.",
		"dir2": "Abeokuta"
	},
	{
		"names": "Gail Nash",
		"lastNames": "Goodman Oneill",
		"email": "dui@velquamdignissim.edu",
		"dir1": "4026 Dui, Avenue",
		"dir2": "Bargagli"
	},
	{
		"names": "Philip Latifah",
		"lastNames": "Sloan Henry",
		"email": "enim.Sed.nulla@estmollisnon.net",
		"dir1": "Ap #488-2913 Pharetra. Road",
		"dir2": "Verrès"
	},
	{
		"names": "Carly Carlos",
		"lastNames": "Myers Sparks",
		"email": "odio.sagittis@purus.org",
		"dir1": "P.O. Box 455, 9945 Quis Road",
		"dir2": "Dehradun"
	},
	{
		"names": "Kato Jonas",
		"lastNames": "Farmer Waters",
		"email": "Integer.mollis@maurissitamet.com",
		"dir1": "Ap #180-9559 Ante. Road",
		"dir2": "Sint-Kwintens-Lennik"
	},
	{
		"names": "Zena Chloe",
		"lastNames": "Vazquez Bernard",
		"email": "nunc.est.mollis@Nuncmauris.co.uk",
		"dir1": "652-1025 Dui. Rd.",
		"dir2": "Rouyn-Noranda"
	},
	{
		"names": "Gil Cailin",
		"lastNames": "Molina Booth",
		"email": "hendrerit.a@Nullam.org",
		"dir1": "P.O. Box 341, 1157 Ligula. Avenue",
		"dir2": "Dillingen"
	},
	{
		"names": "Brett Baker",
		"lastNames": "Travis Parks",
		"email": "velit.eu.sem@elit.edu",
		"dir1": "Ap #180-8122 Ante, Ave",
		"dir2": "Satara"
	},
	{
		"names": "Tad Keefe",
		"lastNames": "Mcgee Salazar",
		"email": "erat@semper.net",
		"dir1": "Ap #875-555 Risus Avenue",
		"dir2": "Dannevirke"
	},
	{
		"names": "Vivian Nasim",
		"lastNames": "Dyer Kirby",
		"email": "porttitor.eros@urnaNunc.com",
		"dir1": "Ap #902-4089 Odio St.",
		"dir2": "West Vancouver"
	},
	{
		"names": "Velma Michael",
		"lastNames": "Harding Clayton",
		"email": "enim.gravida@tempus.com",
		"dir1": "1666 Molestie St.",
		"dir2": "Jundiaí"
	},
	{
		"names": "Geraldine Nehru",
		"lastNames": "Brewer Jimenez",
		"email": "arcu@odioa.ca",
		"dir1": "797-7615 In Rd.",
		"dir2": "Coquitlam"
	},
	{
		"names": "Isabella Michelle",
		"lastNames": "Mcpherson Lucas",
		"email": "id.erat@Nunc.net",
		"dir1": "348-8101 Fringilla Street",
		"dir2": "Gorinchem"
	},
	{
		"names": "May Kyla",
		"lastNames": "Wolfe Riddle",
		"email": "Aenean.gravida@dictumplacerat.com",
		"dir1": "3704 Eleifend. Avenue",
		"dir2": "Brunn am Gebirge"
	},
	{
		"names": "Eleanor Xenos",
		"lastNames": "Rocha Richardson",
		"email": "dictum@Aeneansedpede.org",
		"dir1": "602-5225 A St.",
		"dir2": "Ehein"
	},
	{
		"names": "Chantale Meredith",
		"lastNames": "Rice Fischer",
		"email": "Phasellus.dapibus.quam@facilisis.com",
		"dir1": "Ap #620-156 Fusce Street",
		"dir2": "Moerzeke"
	},
	{
		"names": "Yvonne Cameron",
		"lastNames": "Delgado Cunningham",
		"email": "Nulla@gravida.co.uk",
		"dir1": "Ap #531-6809 Interdum Rd.",
		"dir2": "Nuremberg"
	},
	{
		"names": "Meghan David",
		"lastNames": "Mcdonald Murphy",
		"email": "Mauris@rhoncus.edu",
		"dir1": "P.O. Box 100, 4643 Dis St.",
		"dir2": "Mont-Saint-AndrŽ"
	},
	{
		"names": "Roary Nina",
		"lastNames": "Livingston Flynn",
		"email": "rhoncus@ornareegestasligula.co.uk",
		"dir1": "690-1021 Cursus Av.",
		"dir2": "Oxford"
	},
	{
		"names": "Dorothy Elizabeth",
		"lastNames": "Matthews Lambert",
		"email": "neque@orciDonec.co.uk",
		"dir1": "Ap #271-3704 Aliquet, Rd.",
		"dir2": "Whangarei"
	},
	{
		"names": "Sara Samuel",
		"lastNames": "Coleman Calderon",
		"email": "Maecenas.mi.felis@quamvel.net",
		"dir1": "Ap #652-7986 Sit Av.",
		"dir2": "Laces/Latsch"
	},
	{
		"names": "Yvonne Galvin",
		"lastNames": "Conner Goodwin",
		"email": "viverra@at.org",
		"dir1": "3900 Aliquet Rd.",
		"dir2": "Brahmapur"
	},
	{
		"names": "Carlos Cheyenne",
		"lastNames": "Hull Cline",
		"email": "Nunc@augueac.com",
		"dir1": "414-2629 Enim St.",
		"dir2": "Hatfield"
	},
	{
		"names": "Mercedes Sloane",
		"lastNames": "Hernandez Stewart",
		"email": "lacus@velmaurisInteger.net",
		"dir1": "7561 Ut Rd.",
		"dir2": "Calvera"
	},
	{
		"names": "Travis Silas",
		"lastNames": "Burnett Kelley",
		"email": "eu@nibhsitamet.ca",
		"dir1": "P.O. Box 595, 4275 Nostra, Ave",
		"dir2": "Maidenhead"
	},
	{
		"names": "Ursula Iris",
		"lastNames": "Whitehead Matthews",
		"email": "urna.suscipit.nonummy@in.com",
		"dir1": "181-7851 Tincidunt Rd.",
		"dir2": "Villanova d'Albenga"
	},
	{
		"names": "Meghan Jason",
		"lastNames": "Marsh Sloan",
		"email": "et.ultrices.posuere@auctorMauris.ca",
		"dir1": "471-9364 Primis Road",
		"dir2": "Compiègne"
	},
	{
		"names": "Magee Brenna",
		"lastNames": "Dillard Lara",
		"email": "dolor.Quisque@Suspendissesed.co.uk",
		"dir1": "967-5974 At, St.",
		"dir2": "Burns Lake"
	},
	{
		"names": "Hamilton Eaton",
		"lastNames": "Talley Steele",
		"email": "Pellentesque.ultricies@bibendum.com",
		"dir1": "Ap #188-9080 Non, Rd.",
		"dir2": "Salzburg"
	},
	{
		"names": "Thane Merritt",
		"lastNames": "Huffman Adkins",
		"email": "Integer@ataugueid.org",
		"dir1": "Ap #964-4081 Eu St.",
		"dir2": "Lacombe County"
	},
	{
		"names": "Orli Dorothy",
		"lastNames": "Cline Mayer",
		"email": "cursus.et.magna@placerat.ca",
		"dir1": "417-327 Eleifend Street",
		"dir2": "Retford"
	},
	{
		"names": "Victor Nomlanga",
		"lastNames": "Day Shepherd",
		"email": "dis.parturient.montes@tellusfaucibusleo.co.uk",
		"dir1": "P.O. Box 938, 2545 Nullam Rd.",
		"dir2": "Fort Simpson"
	},
	{
		"names": "Carl Jolie",
		"lastNames": "Nunez Mcdaniel",
		"email": "elit.pede.malesuada@sit.ca",
		"dir1": "Ap #674-1071 Risus Rd.",
		"dir2": "Zedelgem"
	},
	{
		"names": "Amena Linus",
		"lastNames": "Gentry Hodge",
		"email": "eu@laoreet.edu",
		"dir1": "6006 Nunc. St.",
		"dir2": "Hindupur"
	},
	{
		"names": "Felicia Henry",
		"lastNames": "Mcfarland Clarke",
		"email": "penatibus@inmolestie.ca",
		"dir1": "Ap #317-4897 Semper St.",
		"dir2": "Kasteelbrakel"
	},
	{
		"names": "Martin Isaac",
		"lastNames": "Glass Schneider",
		"email": "nulla.magna.malesuada@tincidunt.co.uk",
		"dir1": "Ap #235-8386 Ante Street",
		"dir2": "Toronto"
	},
	{
		"names": "Kibo Jonas",
		"lastNames": "Gates Joseph",
		"email": "iaculis.odio@fermentumvelmauris.co.uk",
		"dir1": "Ap #619-4780 Ipsum. St.",
		"dir2": "Guben"
	},
	{
		"names": "Dale Blossom",
		"lastNames": "Marsh Gilliam",
		"email": "eu.ultrices.sit@cursuspurusNullam.edu",
		"dir1": "173-3097 Eu, Road",
		"dir2": "Bhuj"
	},
	{
		"names": "Donovan Rinah",
		"lastNames": "Delgado Golden",
		"email": "at.velit.Pellentesque@nullaDonec.com",
		"dir1": "2741 Velit Ave",
		"dir2": "Limón (Puerto Limón)"
	},
	{
		"names": "Rhea Martena",
		"lastNames": "Thornton Castaneda",
		"email": "eros.Proin@interdumSed.org",
		"dir1": "Ap #119-986 Dui, Av.",
		"dir2": "Amqui"
	},
	{
		"names": "Bradley Dylan",
		"lastNames": "Sexton Jefferson",
		"email": "ac@nulla.net",
		"dir1": "9193 Hendrerit. Rd.",
		"dir2": "Merrickville-Wolford"
	},
	{
		"names": "Lael Hannah",
		"lastNames": "Gardner Curtis",
		"email": "posuere.enim@at.ca",
		"dir1": "Ap #214-4715 Donec St.",
		"dir2": "Lerwick"
	},
	{
		"names": "Jermaine Rudyard",
		"lastNames": "Curtis Turner",
		"email": "metus@ligula.edu",
		"dir1": "Ap #931-5529 Eget Road",
		"dir2": "Glendon"
	},
	{
		"names": "Delilah Grant",
		"lastNames": "Nichols Byers",
		"email": "diam.lorem@Incondimentum.net",
		"dir1": "993-7794 Eros. Avenue",
		"dir2": "Aalbeke"
	},
	{
		"names": "Mark Acton",
		"lastNames": "Lane Doyle",
		"email": "ridiculus@nonfeugiat.edu",
		"dir1": "P.O. Box 105, 4752 Vitae Rd.",
		"dir2": "Richmond"
	},
	{
		"names": "Marah Dane",
		"lastNames": "Lynch Willis",
		"email": "erat.Vivamus@aauctornon.com",
		"dir1": "P.O. Box 987, 4234 A, St.",
		"dir2": "Worcester"
	},
	{
		"names": "Eagan Regina",
		"lastNames": "Reynolds Dale",
		"email": "et@Pellentesque.edu",
		"dir1": "P.O. Box 660, 9238 Nunc, Street",
		"dir2": "Longueville"
	},
	{
		"names": "Ignacia Rae",
		"lastNames": "Dawson Grimes",
		"email": "ipsum.Donec.sollicitudin@ullamcorpermagnaSed.co.uk",
		"dir1": "P.O. Box 771, 3784 Curabitur Avenue",
		"dir2": "Provost"
	},
	{
		"names": "Erica Tate",
		"lastNames": "Perry Wright",
		"email": "magna.sed.dui@eratnonummyultricies.co.uk",
		"dir1": "806-7132 Tellus, Street",
		"dir2": "Mulchén"
	},
	{
		"names": "Raphael Tara",
		"lastNames": "Ford Long",
		"email": "erat@risusDonec.com",
		"dir1": "866-5898 Maecenas Road",
		"dir2": "Campomarino"
	},
	{
		"names": "Imelda Hilda",
		"lastNames": "Bray Ward",
		"email": "eget@Utsemperpretium.ca",
		"dir1": "P.O. Box 420, 2938 Id, Av.",
		"dir2": "Licantén"
	},
	{
		"names": "Rhona Quynn",
		"lastNames": "Washington Prince",
		"email": "arcu.Aliquam.ultrices@cursuset.ca",
		"dir1": "9073 Lacus Road",
		"dir2": "Harbour Grace"
	},
	{
		"names": "Noble Calista",
		"lastNames": "Mcdaniel Avila",
		"email": "magna@non.com",
		"dir1": "721-8878 Orci Road",
		"dir2": "Sant'Angelo a Fasanella"
	},
	{
		"names": "Mikayla Brenna",
		"lastNames": "Tran Mayo",
		"email": "netus.et@nisl.org",
		"dir1": "Ap #327-8416 In Rd.",
		"dir2": "Winnipeg"
	},
	{
		"names": "Kato Audrey",
		"lastNames": "Wolfe Gray",
		"email": "et@Proineget.net",
		"dir1": "Ap #352-2384 Adipiscing St.",
		"dir2": "Motta Camastra"
	},
	{
		"names": "Rana Reed",
		"lastNames": "Mathews Day",
		"email": "Phasellus@anteiaculisnec.ca",
		"dir1": "1802 Aliquet. Rd.",
		"dir2": "Hamoir"
	},
	{
		"names": "Cassandra Glenna",
		"lastNames": "Macdonald Garner",
		"email": "magna.sed@duiFuscealiquam.ca",
		"dir1": "952-2496 Placerat. Av.",
		"dir2": "Gretna"
	},
	{
		"names": "Vladimir Hilary",
		"lastNames": "Buckner Zamora",
		"email": "odio.Aliquam@ultricies.org",
		"dir1": "676-5839 Phasellus St.",
		"dir2": "Scanzano Jonico"
	},
	{
		"names": "Zahir Stuart",
		"lastNames": "Elliott Dennis",
		"email": "Nulla@aliquam.org",
		"dir1": "397-4032 Id Avenue",
		"dir2": "Preore"
	},
	{
		"names": "Hope Jerome",
		"lastNames": "Medina Fitzgerald",
		"email": "mauris.sagittis.placerat@Nunclaoreet.co.uk",
		"dir1": "1971 Nulla St.",
		"dir2": "Forchies-la-Marche"
	},
	{
		"names": "Emery Brian",
		"lastNames": "England Wilkerson",
		"email": "nec@risusNuncac.net",
		"dir1": "142-7638 Molestie Av.",
		"dir2": "Asbestos"
	},
	{
		"names": "Ulla September",
		"lastNames": "Sanchez Duran",
		"email": "dui@orciPhasellus.com",
		"dir1": "P.O. Box 470, 5719 Elit, Avenue",
		"dir2": "Santomenna"
	},
	{
		"names": "Hilda Bruce",
		"lastNames": "Hodge Tyson",
		"email": "Mauris.vestibulum.neque@ultricesDuis.net",
		"dir1": "643-6664 Laoreet, St.",
		"dir2": "Saskatoon"
	},
	{
		"names": "Kai Keiko",
		"lastNames": "Malone Decker",
		"email": "quam@lobortistellus.org",
		"dir1": "Ap #367-1050 Facilisis Av.",
		"dir2": "Bergerac"
	},
	{
		"names": "Kane Hedy",
		"lastNames": "Whitaker Vasquez",
		"email": "est.ac@Quisquelibero.com",
		"dir1": "Ap #455-3493 Arcu. St.",
		"dir2": "Putignano"
	},
	{
		"names": "Remedios Sade",
		"lastNames": "Ball Wade",
		"email": "et@litoratorquentper.net",
		"dir1": "8793 Amet, St.",
		"dir2": "Straubing"
	},
	{
		"names": "Tobias Timon",
		"lastNames": "Byrd Rush",
		"email": "magnis.dis.parturient@seddolor.com",
		"dir1": "P.O. Box 537, 7858 Non Ave",
		"dir2": "Raipur"
	},
	{
		"names": "Fuller Lacota",
		"lastNames": "Hart Pierce",
		"email": "imperdiet@ametultricies.org",
		"dir1": "769-443 Vestibulum. Rd.",
		"dir2": "Armstrong"
	},
	{
		"names": "Calista Edward",
		"lastNames": "Thompson Richardson",
		"email": "Proin.sed@interdum.edu",
		"dir1": "P.O. Box 569, 1804 Malesuada St.",
		"dir2": "Hull"
	},
	{
		"names": "Jonah Morgan",
		"lastNames": "Serrano Armstrong",
		"email": "leo.Vivamus@temporest.com",
		"dir1": "998-9200 Aliquam Rd.",
		"dir2": "Villers-la-Ville"
	},
	{
		"names": "Burke Jonas",
		"lastNames": "Crane Colon",
		"email": "mi.lacinia@mollisnec.com",
		"dir1": "433 Ultrices, Avenue",
		"dir2": "Veraval"
	},
	{
		"names": "Regina Kay",
		"lastNames": "Whitley Bartlett",
		"email": "Nulla.tincidunt.neque@Aliquamadipiscing.ca",
		"dir1": "P.O. Box 552, 5632 Ut, St.",
		"dir2": "Bazzano"
	}
];
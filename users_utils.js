//var usuario1 = jUsers.users[0];
//console.log(FULL_BIAS_LIST);
//var e = encodeUser(3);
//console.log(e);
//afinidade(128, 1294);

//var USUARIO = 1035;
//var AIS = executeAIS(USUARIO, jUsers.users);
//console.log(AIS);
//preverNotas(USUARIO, AIS);

function usuarioJaAssistiu(usuario, titulo){

	var filmes = jUsers.users[usuario].movieRatings;

	for (filme in filmes){

		if (filmes[filme][0].Title == titulo){

			return true;
		}
	}

	return false;
}

function obterNotasUsuario(filmes, interseccaoFilmes){

	var NotasUsuario = [];

	for (var i=0; i<filmes.length; i++){

		var title = filmes[i][0].Title;

		if ( array_contains(interseccaoFilmes, title) ){

			if (NotasUsuario[title] == undefined){ //evita duplicações

				var nota = (filmes[i][1] == 0)?1:filmes[i][1];

				NotasUsuario[title] = nota;
			}
		}
	}
	
	return NotasUsuario;
}

function mostrarNotasUsuario(){

	var user = document.getElementById("usuario").value;
	var aval = jUsers.users[user];
	var div = document.getElementById("notas");
	div.innerHTML = "";
	//div.innerHTML = "<strong>"+aval.biasList+"</strong><br>";

	var movies = [];

	for (movie in aval.movieRatings){

		var movie = {
			title: aval.movieRatings[movie][0].Title,
			rating: aval.movieRatings[movie][1],
			genre: aval.movieRatings[movie][0].Genre
		};

		movies.push(movie);
	}

	movies.sort(function(a, b){

		if (a.title > b.title){

			return 1;

		} else if (a.title < b.title){

			return -1;
		}

		return 0;
	});

	for (movie in movies){

		div.innerHTML += movies[movie].title + " - " + movies[movie].rating + "<br>";
	}
}

function montarListaBias(){

	var fullBiasList = [];

	for (user in jUsers.users){

		var biasList = jUsers.users[user].biasList;
		
		for (bias in biasList){

			var b = biasList[bias][0];

			if (fullBiasList.indexOf(b) == -1){

				fullBiasList.push(b);
			}
		}
	}

	fullBiasList.sort();

	return fullBiasList;
}


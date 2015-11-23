function obterTitulos(filmes){

	var titulosUsuario = [];

	for (var i=0; i<filmes.length; i++){

		if (titulosUsuario.indexOf(filmes[i][0].Title) == -1 ){ //evita duplicações (problema no data set)

			titulosUsuario.push(filmes[i][0].Title);
		}
	}

	return titulosUsuario;
}

function obterInterseccaoEntreFilmes(usuario1, usuario2){

	var titulosUsuario1 = obterTitulos(jUsers.users[usuario1].movieRatings);
	var titulosUsuario2 = obterTitulos(jUsers.users[usuario2].movieRatings);

	interseccao = array_intersect(titulosUsuario1, titulosUsuario2);

	return interseccao;
}

function montarVetorFilmes(notas1, notas2, interseccao){
			
	var vetor = [];

	for (var i in interseccao){

		var obj = {};
		obj.filme = interseccao[i];
		obj.notaUsuario1 = notas1[interseccao[i]];
		obj.notaUsuario2 = notas2[interseccao[i]];

		vetor.push(obj);
	}

	return vetor;
}

function obterMedia(filmes){

	var media = 0;

	for (var movie in filmes){

		media += Number(filmes[movie][1]);
	}

	return arredondar(media / filmes.length);
}
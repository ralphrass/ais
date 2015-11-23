#FEEL FREE TO CHANGE THIS FILE ANYWAY YOU WANT.

import json
import operator


movies = []
FIXDB =  'fixedDataBase.txt'

# Return the list of genres
def getGenreList():
	return countGenres(movies).keys()


# Loads the movie database
def loadDB(file):
	f = open(file, 'r')
	for line in f:
		movie = json.loads(line)
		newMovie = dict()
		newMovie['Title'] = movie['Title']
		newMovie['Year'] = movie['Year']
		newMovie['Genre'] = movie['Genre']
		newMovie['Actors'] = movie['Actors']
		newMovie['Director'] = movie['Director']
		movies.append(newMovie)
	print('Database loaded!')
	f.close()

# In a list of movies, count the frequency of each genre
def countGenres(listMovies):
	genreMap = dict()
	for movie in listMovies:
		genreString = movie['Genre']
		genres = genreString.split(',')
		for genre in genres:
			genre = genre.strip()
			if(genreMap.has_key(genre)):
				genreMap[genre] = genreMap[genre] + 1.0/len(listMovies)
			else:
				genreMap[genre] = 1.0/len(listMovies)
	return genreMap

# In a list of movies, count the frequency of each actor
def countActors(listMovies):
	actorMap = dict()
	for movie in listMovies:
		actorsString = movie['Actors']
		actors = actorsString.split(',')
		i = 0;
		for actor in actors:
			if(i > 5): break
			actor = actor.strip()
			if(actorMap.has_key(actor)):
				actorMap[actor] = actorMap[actor] + 1.0/len(listMovies)
			else:
				actorMap[actor] = 1.0/len(listMovies)
			i += 1

	return actorMap

# In a list of movies, count the frequency of each director
def countDirectors(listMovies):
	directorMap = dict()
	for movie in listMovies:
		directorsString = movie['Director']
		directors = directorsString.split(',')
		i = 0;
		for director in directors:
			if(i > 5): break
			director = director.strip()
			if(directorMap.has_key(director)):
				directorMap[director] = directorMap[director] + 1.0/len(listMovies)
			else:
				directorMap[director] = 1.0/len(listMovies)
			i += 1

	return directorMap

#FEEL FREE TO CHANGE THIS FILE ANYWAY YOU WANT.

import json
import operator

class User():
    
    def __init__(self, name, biasList):
        # moveRatings is a list of two sized lists containing, on the first element, a dictionary with the data of a movie, and on the second element the rating for this movie
        # movieRatings[0][0]['Title'] -> returns the title of the first movie.
        # movieRatings[0][0]['Year'] -> returns the year of  the first movie.
        # movieRatings[0][0]['Genre'] -> returns the list of genres of the first movie.
        # movieRatings[0][0]['Actors'] -> returns the list of actors of the first movie.
        # movieRatings[0][0]['Directors'] -> returns the list of directors of the first movie.
        # movieRatings[0][1] -> returns the rating of the first movie.
        self.movieRatings = []
        # A list of 5 prefereces of each user. The preferences are stored as a list, contaning the genre as the first element and a number as the second element. 
        # This number represents how much the scores of an user is biased towards some genre. Genres that are not in the list have this number as 0.
        # You can use this list to verify if the recomendations you obtained belong to genres that this user prefers.
        self.biasList = biasList
        # The user name, represented by a number.
        self.name = name
        # Antibody/Antigen concentration
        self.concentration = 10.0

    # Returns a list of movies. Each movie is represented by a dictionary contaning its data. The rating is not included.
    def getMovieList(self):
        movieList = []
        for m in self.movieRatings:
            movieList.append(m[0])
        return movieList

    # Returns a dictionary that maps the title of a movie to a rating
    def getMovieMap(self):
        movieMap = dict()
        for m in self.movieRatings:
            movieMap[m[0]['Title']] = m[1]
        return movieMap

    # User toString method
    def __repr__(self):
        s = 'User: ' +  self.name 
        return s
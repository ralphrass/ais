#FEEL FREE TO CHANGE THIS FILE ANYWAY YOU WANT.

import user as u
import movieDB as mdb
import random
import json
from operator import itemgetter, attrgetter, methodcaller


STIMULATION_RATIO = 0.5
SUPPRESION_RATIO = 0.3
DEATH_RATIO = 0.1
NEIGHBORS = 10
MAX_RECOMENDATIONS = 5

def main():
    global users
    mdb.loadDB(mdb.FIXDB)
    users = load('users.txt')
    #print users[0].movieRatings[0][0]['Title'], users[0].movieRatings[0][1]
    affinity(0, 1);
    
# Load user database
def load(file):
    f = open(file, 'r')
    users = []
    for line in f:
        jsonUser = json.loads(line)
        user = u.User(jsonUser['name'], jsonUser['biasList'])
        user.movieRatings = jsonUser['movieRatings']
        users.append(user)
    print 'User database loaded!'
    f.close()
    return users


# Methods to be implemented #

def recomendMovies(user, antibodies):
    print 'Not Implemented'


def executeAIS(antigen, users):
    print 'Not Implemented'


def affinity(user1, user2):
    print 'Not Implemented'

main()

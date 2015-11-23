
var ROUND = 10000;

function array_intersect() {
  var i, all, shortest, nShortest, n, len, ret = [], obj={}, nOthers;
  nOthers = arguments.length-1;
  nShortest = arguments[0].length;
  shortest = 0;
  for (i=0; i<=nOthers; i++){
    n = arguments[i].length;
    if (n<nShortest) {
      shortest = i;
      nShortest = n;
    }
  }

  for (i=0; i<=nOthers; i++) {
    n = (i===shortest)?0:(i||shortest); //Read the shortest array first. Read the first array instead of the shortest
    len = arguments[n].length;
    for (var j=0; j<len; j++) {
        var elem = arguments[n][j];
        if(obj[elem] === i-1) {
          if(i === nOthers) {
            ret.push(elem);
            obj[elem]=0;
          } else {
            obj[elem]=i;
          }
        }else if (i===0) {
          obj[elem]=0;
        }
    }
  }
  return ret;
}

function array_contains(array, indice){

  for (var valor in array){

    if (array[valor] == indice){

      return true;
    }
  }

  return false;
}

function dec2bin(dec){

    return (dec >>> 0).toString(2);
}

function encodeUser(user){

    var biasList = jUsers.users[user].biasList;
    var decimal = 0;

    for (biasIndex in FULL_BIAS_LIST){

        for (biasUserIndex in biasList){

            if (FULL_BIAS_LIST[biasIndex] == biasList[biasUserIndex][0]){

                decimal += Number(biasIndex);
            }
        }
    }

    return dec2bin(decimal);
}

function arredondar(valor){

  return Math.round(valor * ROUND) / ROUND;
}
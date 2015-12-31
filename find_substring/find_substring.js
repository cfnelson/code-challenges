//- Find the position of a substring in a string

function findSubStr(strToSearch, strSubToFind) {
  var found = -1, i = 0, j = 0;
  for ( i = 0; i < strToSearch.length; ++i ) {
    while ( strToSearch[i] === strSubToFind[j] ) {
      if ( j === 0 ) found = i;
      if ( strSubToFind.length - 1 === j ) return found;
      j++;
      i++;
    }
    // Reseting the default values
    found = -1; 
    j = 0;
  }
  return found; 
}

console.log( findSubStr("apple","ppl") );
console.log( findSubStr("apple","lemon") );


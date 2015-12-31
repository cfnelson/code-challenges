// Find all permutations of a string. 

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

function swapChars (index1,index2, strToSwap) {
  var tempChar = strToSwap[index1];
  return setCharAt( setCharAt(strToSwap, index1, strToSwap[index2]), index2, tempChar );
}

function permutate(strPermutations, start, end) {
  if ( start === end ) {
    console.log( strPermutations );
    return; //- Return is here for extra clarity
  } else {
    for ( var i = start; i < strPermutations.length; ++i ) {
      strPermutations = swapChars( start, i, strPermutations);
      permutate( strPermutations, start + 1, end );
      strPermutations = swapChars( start, i, strPermutations);
    }
  }
}

// Testing the permutate function
permutate("abc",0,3);
permutate("abcd",0,4);


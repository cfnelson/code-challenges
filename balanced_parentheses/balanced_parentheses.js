/* 
 * Write a function that takes a string of text and returns true if
 * the types of parentheses are all balanced.
 *
 * Example: 
 *  balancedParens("[](){}"); // true
 *  balancedParens("[({})]"); // true
 *  balancedParens("[(]{)}"); // false
 *  balancedParens("[(])");   // false
 */

var myMap = {
  '[': ']',
  '{': '}',
  '(': ')'
};

function checkIfBalanced(strToCheck) {
  var stack = new Array();
  if ( (strToCheck.length % 2) !== 0) return false;
  
  for ( var i = 0; i < strToCheck.length; ++i ) {
    if ( Object.keys(myMap).find(strToCheck[i]) !== undefined ) {
      stack.push(strToCheck[i]);
    }
    // Object.values(myMap).find(strToCheck[i]) !== undefined  // ECMAscript 2016 (ES7) proposal 
    else if ( strToCheck[i] === ']' || strToCheck[i] === '}' || strToCheck[i] === ')' ) {
      if ( myMap[stack.pop()] !== strToCheck[i] ) return false; 
    } 
  }
  return stack.length === 0;
}


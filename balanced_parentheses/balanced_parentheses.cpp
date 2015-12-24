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

#include <iostream>
#include <stack>
#include <string>
#include <map>
using namespace std;

bool checkIfBalanced(string parens) {
  stack<char> lHParens;
  map<char,char> myMap;
  myMap['[']=']';
  myMap['{']='}';
  myMap['(']=')';
  int strLen = parens.length();

  if ( (strLen % 2) != 0) return false;
  
  for (int i = 0; i < strLen; ++i) 
  {
    if (myMap.find(parens[i]) != myMap.end() ) 
    {
      lHParens.push(parens[i]);
    } 
    else if (parens[i] == ']' || parens[i] == ')' || parens[i] == '}' ) 
    {
      if (lHParens.empty() || (myMap.find(lHParens.top())->second) != parens[i]) 
      {
        return false; 
      } 
      else 
      {
        lHParens.pop();
      }
    }
  }
  return lHParens.empty();
}

int main() {
  string test1 = "[](){}";
  string test2 = "[({})]";
  string test3 = "[(]{)}";
  string test4 = "[(])";
  string test5 = "((";
  string test6 = "))";
  string test7 = "(([]))";
  string test8 = "(([";
  
  cout << checkIfBalanced(test1) << endl;
  cout << checkIfBalanced(test2) << endl;
  cout << checkIfBalanced(test3) << endl;
  cout << checkIfBalanced(test4) << endl;
  cout << checkIfBalanced(test5) << endl;
  cout << checkIfBalanced(test6) << endl;
  cout << checkIfBalanced(test7) << endl;
  cout << checkIfBalanced(test8) << endl;
  
  return 0;
}



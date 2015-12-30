// Find all the permuations of a string. 

#include <iostream>
#include <string>
using namespace std;

void swapChar (char &a, char &b) 
{
	char temp; 
	temp = a;
  a = b;
  b = temp;
}

void permutate (string strPermutations, int start, int end) 
{
  static int count;
  
  if ( start == end ) 
  {
    cout << ++count << " : " << strPermutations << endl;
    return; //- Return is here for clarity.
  } 
  else 
  {
    for ( int i = start; i < strPermutations.length(); ++i ) 
    {
      swapChar(strPermutations[start], strPermutations[i]);
      permutate(strPermutations,start+1, end);
      swapChar(strPermutations[start], strPermutations[i]);
    }
  }
}

int main() 
{
	int    pause;
	string permuteStr;

	cout << "Enter the string : " << endl;
	
  cin >> permuteStr;
	
  cout << "The permutations of the given string : " << endl;
	
  permute(permuteStr, 0, permuteStr.length());
	
  cout << "Enter in a digit and press Enter to unpause." << endl;
	
  cin >> pause;
	
  return 0;
}

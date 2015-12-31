//- Find the position of a substring in a string
#include <iostream>
#include <string>
using namespace std;

int findSubStr(string strToSearch,string subStrToFind) 
{
	int found = -1, j = 0;
	int searchStrLength = strToSearch.length();
	int subStrLength    = subStrToFind.length();

	for ( int i = 0; i < searchStrLength; ++i ) 
	{
		while ( strToSearch[i] == subStrToFind[j] ) 
		{
			if ( j == 0 ) found = i;
			if ( subStrLength - 1 == j ) return found;
			j++;
			i++;
		}
		// resetting the default values.
		j = 0;
		found = -1;
	}
	return found;
}

int main()
{
	int pause;
	string inputString, subString;

	cout << "Enter the complete String: " << endl;
	cin  >> inputString;

	cout << "Enter the subString to find: " << endl;
	cin  >> subString;

	cout << "Position = " << findSubStr(inputString,subString) << endl;
	cout << "Enter in a digit and press Enter to unpause." << endl;
  cin  >> pause;
	
  return 0;
}

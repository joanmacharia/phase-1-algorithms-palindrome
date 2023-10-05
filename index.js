function isPalindrome(string) {
  // Write your algorithm here

  const stringToArray = string.split('')

  const reverseArray = stringToArray.reverse()

  const joinToString = reverseArray.join('')

  if (joinToString === string){
     return true
  } else{
    return false
  }
}

console.log(isPalindrome('mom'))
/* 
  Add your pseudocode here
*/
// Initialize the function and assign a parameter callled string
// Use the split method to make the string an array
// Introduce an expression that reverses the array characters, using the reverse method
// Use the join method to join the reversed array characters
// Use a conditional statement to determine whether the  entered array is a palindrome or not to the string

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

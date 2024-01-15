// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  
}
function solution(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join("")
  return joinArray; 
}
 
solution("hello");

function reverseString(str) {
    
    var newString = "";
 
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; // or newString = newString + str[i];
    }
   
    // Step 3. Return the reversed string
    return newString; // "olleh"
}
 
reverseString('hello');
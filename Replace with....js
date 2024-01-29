// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
      var code = text.charCodeAt(i);
      if (/[a-zA-Z]/.test(text[i])) {
        result += (code >= 97) ? code - 96 : code - 64;
        result += " ";
      }
    }
    return result.trim();
  }


  function alphabetPosition(text) {
    return text
      .toLowerCase() //convert the string to lowercase
      .split('')  //split the string to evalute it one by one
      .map(char => /[a-z]/.test(char) ? char.charCodeAt(0) - 96 : '') //useing regular expressions we test to see if it is a letter and then convert it to ASCII.
      .filter(pos => pos !== '') //filter out any empty positions
      .join(' '); //join the string back together
  }
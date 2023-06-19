// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(number) {
    if (number === 0) {
      return [0];
    }
    
    const digits = [];
    
    while (number > 0) {
      const digit = number % 10;
      digits.push(digit);
      number = Math.floor(number / 10);
    }
    
    return digits;
  }
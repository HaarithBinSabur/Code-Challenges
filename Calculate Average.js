// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    if (array.length === 0) {
      return 0;
    } else {
      var sum = array.reduce(function (a, b) {
        return a + b;
      }, 0);
      var average = sum / array.length;
      return average;
    }
  }
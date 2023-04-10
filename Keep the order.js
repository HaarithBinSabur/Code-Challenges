// Task:
// Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.

// Do not modify the input.

// Some examples:
// keepOrder([1, 2, 3, 4, 7], 5) //=> 4
//                       ^(index 4)
// keepOrder([1, 2, 3, 4, 7], 0) //=> 0
//           ^(index 0)
// keepOrder([1, 1, 2, 2, 2], 2) //=> 2
//                 ^(index 2)

function keepOrder(ary, val) {
    let left = 0;
    let right = ary.length;
    
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      
      if (ary[mid] < val) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    
    return left;
    }
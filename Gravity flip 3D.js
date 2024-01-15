// This kata is a slightly harder version of Gravity Flip. It is recommended to do that first.

// Bob is bored in his physics lessons yet again, and this time, he's brought a more complex gravity-changing box with him. It's 3D, with small cubes arranged in a matrix of n×m columns. It can change gravity to go in a certain direction, which can be 'L', 'R', 'D', and 'U' (left, right, down, and up).

// Given the initial configuration of the cubes inside of the box as a 2D array, determine how the cubes are arranged after Bob switches the gravity.

// See the sample tests for examples.


function flip(d,a){
    if (/[LR]/.test(d)) return a.map(e=>e.sort((a,b)=>d==='R' ? a-b : b-a))
    let t = [...a[0]].map((_,i)=>a.map(e=>e[i]).sort((a,b)=>d==='D' ? a-b : b-a))
    return [...t[0]].map((_,i)=>t.map(e=>e[i]))
  }
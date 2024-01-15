// No Story

// No Description

// Only by Thinking and Testing

// Look at result of testcase, guess the code!

function testit(s){
    return s.replace(/../g, (s) =>
      String.fromCharCode((s.charCodeAt(0) + s.charCodeAt(1)) / 2));
  }
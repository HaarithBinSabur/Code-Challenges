function fizzBuzz(){

    for(let i = 1; i <= 100; i++ )
    if([i] % 3 === 0){
        console.log('Fizz')
    }
    else if([i] % 5 === 0){
        console.log('Buzz')
    }
    else if([i] % 5 === 0 && [i] % 3 === 0){
        console.log(i,'FizzBuzz')
    }
}

//Create a for loop that iterates up to 100 while outputting "fizz" at multiples 
//of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.
 function fizzBuzz(begin, end) {
    let fb = '';
    for (; begin <= end; begin++) {
        if (begin % 3 === 0) fb += 'Fizz';
        if (begin % 5 === 0) fb += 'Buzz';
        console.log(fb ? fb : begin);
        fb = '';
    }
}
fizzBuzz(11, 2)
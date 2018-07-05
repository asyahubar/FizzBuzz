exports.fizzbuzz = function(request, response) {
    var result = [];
    for (let i = 1; i <= 1000; i++) {
        if(i%3 == 0 || i%5 === 0) {
            if (i%3 === 0) {
                result.push('Fizz');
            }
            if (i%5 === 0 ) {
                result.push('Buzz');
            }
            if ( i%3 === 0 && i%5 === 0) {
                result.push('FizzBuzz');
            }
        }
    }
    response.send(result);
};


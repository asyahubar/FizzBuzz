exports.spin = function(request, response) {
    var result = [];
    for (let i = 0; i <= 1000; i++) {
        if ( i % 2 === 0) {
            result.push(i);
        }
    }
    response.send(result);
};


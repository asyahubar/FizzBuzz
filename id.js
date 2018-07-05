exports.id = function(request, response) {
    if (isNaN(request.params.id)) {
        response.send('it is not a number. Try again!');
    }
    if ( !(isNaN(request.params.id)) ) {
        response.send(request.params.id);
    }
};
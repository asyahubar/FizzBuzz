const express = require('express');

const app = express();
const loops = require('./loops');
const fizzbuzz = require('./fizzbuzz');
const id = require('./id');


app.get('/', (req, res) => res.send(console.log(req.get('user-agent'))));
app.get('/loops', loops.spin);
app.get('/fizzbuzz', fizzbuzz.fizzbuzz);
app.get('/parameters/:id', id.id);


app.listen(3000, () => console.log('Example app listening on port 3000!'));




const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(request, response) {
    // console.log(request);
    response.send("<h1>Hello Vois</h1>");
});

app.get('/contact', function (request, response) {
    response.send('Contact me at: rafikk1998@gmail.com');
});

app.get('/about', function (request, response) {
    response.send('Hi this is Rafi Khan Khadem');
});

app.listen(3000, function () {
    console.log(`Server started on http://localhost:${port}`);
});
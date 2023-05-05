const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})


app.post('/', (req, res) => {
    const query = req.body.cityName;
    const apiKey = '6a74d0568f1e312900c750047ab804ef';
    const unit = 'metric';

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${unit}`;

    http.get(url, (response) => {
        response.on('data', (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            // console.log(weatherData);
            res.write(`<h1>The temperature in ${query} is ${temp}&deg C.</h1>`);
            res.write(`<h3>The weather description is ${description}</h3>`);
            res.write(`<img src=${imageURL} alt="Icon image"/>`);
            res.send();
        })
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


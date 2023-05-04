const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + '/index.html');
});

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmicalculator.html');
});

app.post('/', (req, res) => {
    let {num1, num2} = req.body; 
    num1 = Number(num1);
    num2 = Number(num2);
    res.send(`The result is ${num1 + num2}`);
})

app.post('/bmicalculator', (req, res) => {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let bmi = (weight / Math.pow(height, 2)).toPrecision(4);
    res.send(`Your BMI is ${bmi}`);
});

app.listen(port, () => {
    console.log(`Calculator app running at http://localhost:${port}`);
})

const express = require('express');
const math = require('mathjs');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true,}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'favicon.ico'));
});

app.post('/count', (req, res) => {
    let result;

    if (!req.body || !req.body.expression) {
        res.status(400).send('Wrong expression sended or empty!');
    }
    
    try {
        result = math.parse(req.body.expression).evaluate();
    } catch (err) {
        res.status(400).send('Cant parse expression');
    }

    res.send({
        result: result,
    });
});

app.listen(port, () => {
  console.log(`Calculator app listening on port ${port}`);
});


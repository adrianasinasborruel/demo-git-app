const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());
var myDog = [];

app.get('/', (req, res) => {
    //res.send('Hello World!');
    res.status(200).json({greeting: 'Hello World!'})
});

app.post('/', (req, res) =>{
    //res.status(200).json({greeting: `Hello ${req.body.username}!`})
    const myDog = req.body.name;
    res.send(`Hello ${myDog}!`);
});

app.listen(port, () =>
    //console.log('Running at port 3000!');
    console.log(`Example app listening on port ${port}!`)
);
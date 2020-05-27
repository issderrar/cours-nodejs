const express = require('express')
const app = express()
const port = 8080
const morgan = require("morgan")
const bodyParser = require("body-parser")
const data = require('./datas/data.json')
const players = require('./datas/tennisplayers.json')

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/home', function (req, res) {
    res.send('Bienvenue')
    console.log('Bienvenue')
})
app.get('/tableau', function (req, res) {
    var numbers = [1, 2, 3, 4, 5, 6]
    res.send(numbers)
})
app.get('/students', function (req, res) {
    res.send(data)
})
app.get('/students/:lastName', function (req, res) {
    const {lastName} = req.params
    let result = data.students.find(
        (student) => student.lastName === lastName)

    if (result) {
        res.send(result)
    } else {
        res.sendStatus(404)
    }
})

app.get('/players', function (req, res) {
    res.send(players.players)
})
app.get('/players/find/:lastName', function (req, res) {
    const {lastName} = req.params
    let result = players.players.find(
        (player) => player.lastname === lastName
    )
    if (result) {
        res.send(result)
    } else {
        res.sendStatus(404)
    }
})
app.get('/players/:id', function (req, res) {
    const {id} = req.params
    let result = players.players.find(
        (player) => player.id === id
    )
    if (result) {
        res.send(result)
    } else {
        res.sendStatus(404)
    }
})

app.post('/players', (req, res) => {
    res.send(req.body);
});

app.listen(8080, function () {
    console.log('Example app listening on port: ${port}')
})
const express = require('express')
const app = express()
const port = 8080
let data = require('./data.json')

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/home', function (req, res) {
    res.send('Bienvenue')
    console.log('Bienvenue')
})
app.get('/tableau', function (req, res) {
    var numbers = [1,2,3,4,5,6]
    res.send(numbers)
})
app.get('/students', function (req, res) {
    res.send(data)
})
app.get('/students/:lastName', function (req, res) {
    const { lastName } = req.params
    let result = data.students.filter(
        (student) => student.lastName === lastName)
    res.send(result)
})

app.listen(8080, function () {
    console.log('Example app listening on port: ${port}')
})
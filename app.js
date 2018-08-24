var express = require('express')
var app = express()
var pug = require('pug')
var myData = require('./public/js/arrays.json')
app.set('views', './views')
app.set('view engine', 'pug')

app.use('/', express.static('public'))
app.use('/images/', express.static('assets/images'))
app.use('/node_modules/', express.static('node_modules'))


// Root
app.get('/', function (req, res){res.render('index', myData)})

app.listen(3600, function () {
  console.log('App listening on port 3600!')
})
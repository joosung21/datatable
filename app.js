var express = require('express')
var app = express()
var pug = require('pug')
app.set('views', './views')
app.set('view engine', 'pug')

app.use('/', express.static('public'))
app.use('/images/', express.static('assets/images'))

// Root
app.get('/', function (req, res){res.render('index')})

app.listen(3600, function () {
  console.log('App listening on port 3600!')
})
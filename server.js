var express = require('express')
var bodyParser = require('body-parser')
// api
var getWord = require('./api/get-word')
// create app
var app = express()
var backupPort = 5000

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())

app.set('port', (process.env.PORT || backupPort))

app.get('/word', getWord)

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})

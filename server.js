var express = require('express')
var bodyParser = require('body-parser')
// create app
var app = express()
var backupPort = 5000

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())

app.set('port', (process.env.PORT || backupPort))

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})

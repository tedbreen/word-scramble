var http = require('http')
var querystring = require('querystring')

var MIN_WORD_LENGTH = 4
var MAX_WORD_LENGTH = 7

var apiKey = process.env.WORDNIK_KEY

module.exports = function getWord (request, response) {
  var queryStr = querystring.stringify({
    minLength: MIN_WORD_LENGTH
  , maxLength: MAX_WORD_LENGTH
  , api_key: apiKey
  })

  var req = http.request({
    host: 'api.wordnik.com'
  , path: `/v4/words.json/randomWord?${queryStr}`
  , method: 'GET'
  , withCredentials: false
  }, function httpRequest (res) {
    res.on('data', function data (chunk) {
      var currentWord = JSON.parse(chunk).word.toLowerCase()
      response.send(currentWord)
    })
  })
  req.end()
}

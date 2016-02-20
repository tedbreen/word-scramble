var React = require('react')
var keycode = require('keycode')
var shuffleArray = require('shuffle-array')
var reqwest = require('reqwest')
// components
var Word = require('../word/')
// constants
var ROUND_DELAY = 1500

module.exports = React.createClass({
  getInitialState: function getInitialState () {
    return {
      shuffledLetters: []
    , matchedLetters: []
    , unmatchedLetters: []
    , currentWord: ''
    , roundStatus: null
    }
  }

, componentDidMount: function componentDidMount () {
    this.getNewWord()
    window.addEventListener('keyup', this.handleKeyup)
  }

, getNewWord: function getNewWord () {
    reqwest({
      url: '/word'
    , method: 'get'
    , success: function success (word) {
        var shuffledLetters = shuffleArray(word.split(''))

        console.log('HINT: ', word)

        this.setState({
          shuffledLetters: shuffledLetters
        , matchedLetters: []
        , unmatchedLetters: shuffledLetters
        , currentWord: word
        , roundStatus: null
        })
      }.bind(this)
    , error: function error (err) {
        console.error('/word get request error:', err)
      }
    })
  }

, resetRound: function resetRound () {
    var shuffledLetters = this.state.shuffledLetters

    this.setState({
      matchedLetters: []
    , unmatchedLetters: shuffledLetters
    , roundStatus: null
    })
  }

, checkWord: function checkWord (letters) {
    if (letters.length === this.state.shuffledLetters.length) {
      if (letters.join('') === this.state.currentWord) {
        this.setState({roundStatus: 'won'})
        window.setTimeout(this.getNewWord, ROUND_DELAY)
      }
      else {
        this.setState({roundStatus: 'lost'})
        window.setTimeout(this.resetRound, ROUND_DELAY)
      }
    }
  }

, handleKeyup: function handleKeyup (event) {
    var typed = keycode(event)
    var matchedLetters = this.state.matchedLetters
    var unmatchedLetters = this.state.unmatchedLetters
    var newUnmatchedLetters = []
    var unmatched = true

    unmatchedLetters.forEach(function forEach (letter) {
      if (unmatched && (letter === typed)) {
        unmatched = false
        matchedLetters.push(letter)
      }
      else {
        newUnmatchedLetters.push(letter)
      }
    })

    this.setState({
      matchedLetters: matchedLetters
    , unmatchedLetters: newUnmatchedLetters
    })

    this.checkWord(matchedLetters)
  }

, render: function render () {
    var matchedLetters = this.state.matchedLetters
    var unmatchedLetters = this.state.unmatchedLetters
    var roundStatus = this.state.roundStatus

    return (
      <div className="app">
        <div />
        <Word
          matchedLetters={matchedLetters}
          unmatchedLetters={unmatchedLetters}
          progress={roundStatus}
        />
        <footer className="app-footer">
          Made with React by <a className="app-footer-link" href="https://twitter.com/tedbreen">@tedbreen</a>
        </footer>
      </div>
    )
  }
})

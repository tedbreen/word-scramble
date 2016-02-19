var React = require('react')
var ReactDOM = require('react-dom')
var keycode = require('keycode')
var shuffleArray = require('shuffle-array')
// TEMPORARY
var randomWords = require('random-words')
// components
var Word = require('./components/word/')

var App = React.createClass({
  getInitialState: function getInitialState () {
    var currentWord = randomWords().toLowerCase()
    var shuffledLetters = shuffleArray(currentWord.split(''))
    // DEBUG ONLY
    console.log(currentWord)
    return {
      shuffledLetters: shuffledLetters
    , matchedLetters: []
    , unmatchedLetters: shuffledLetters
    , currentWord: currentWord
    }
  }

, componentDidMount: function componentDidMount () {
    document.addEventListener('keyup', this.handleKeyup)
  }

, getNewWord: function getNewWord () {
    // TODO: replace with ajax request
    var currentWord = randomWords().toLowerCase()
    var shuffledLetters = shuffleArray(currentWord.split(''))
    // DEBUG ONLY
    console.log(currentWord)
    this.setState({
      shuffledLetters: shuffledLetters
    , matchedLetters: []
    , unmatchedLetters: shuffledLetters
    , currentWord: currentWord
    })
  }

, resetRound: function resetRound (shuffledLetters) {
    this.setState({
      matchedLetters: []
    , unmatchedLetters: shuffledLetters
    })
  }

, checkWord: function checkWord (letters) {
    if (letters.length === this.state.shuffledLetters.length) {
      if (letters.join('') === this.state.currentWord) {
        console.log('you win')
        this.getNewWord()
      }
      else {
        console.log('you lose. try again')
        this.resetRound(this.state.shuffledLetters)
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

    return (
      <div>
        <Word
          matchedLetters={matchedLetters}
          unmatchedLetters={unmatchedLetters}
        />
      </div>
    )
  }
})

var markup = (
  <App />
)

ReactDOM.render(markup, document.getElementById('react'))

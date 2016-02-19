var React = require('react')
var ReactDOM = require('react-dom')
var keycode = require('keycode')
var shuffleArray = require('shuffle-array')
// components
var Word = require('./components/word/')

var App = React.createClass({
  propTypes: {
    word: React.PropTypes.string
  }

, getInitialState: function getInitialState () {
    var shuffledLetters = shuffleArray(this.props.word.split(''))

    return {
      shuffledLetters: shuffledLetters
    , matchedLetters: []
    , unmatchedLetters: shuffledLetters
    }
  }

, componentDidMount: function componentDidMount () {
    document.addEventListener('keyup', this.onKeyup)
  }

, getNewWord: function getNewWord () {
    // ajax request
  }

, checkWord: function checkWord (letters) {
    var shuffledLetters = this.state.shuffledLetters
    var result = letters.join('') === this.props.word

    if (letters.length === shuffledLetters.length) {
      if (result) {
        console.log('you win')
        this.getNewWord()
      }
      else {
        console.log('you lose. try again')
        this.setState({
          matchedLetters: []
        , unmatchedLetters: shuffledLetters
        })
      }
    }
  }

, onKeyup: function onKeyup (event) {
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
  <App word="breen" />
)

ReactDOM.render(markup, document.getElementById('react'))

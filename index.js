var React = require('react')
var ReactDOM = require('react-dom')
var keycode = require('keycode')
// components
var Word = require('./components/word/')

var App = React.createClass({
  propTypes: {
    word: React.PropTypes.string
  }

, getInitialState: function getInitialState () {
    return {
      matchedLetters: []
    , unmatchedLetters: this.props.word.split('')
    }
  }

, componentDidMount: function componentDidMount () {
    document.addEventListener('keyup', this.onKeyup)
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

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
      matches: []
    }
  }

, componentDidMount: function componentDidMount () {
    document.addEventListener('keyup', this.onKeyup)
  }

, onKeyup: function onKeyup (event) {
    var letters = this.props.word.split('')
    var matches = this.state.matches
    var typed = keycode(event)

    if (letters.includes(typed) && !matches.includes(typed)) {
      matches.push(typed)
      this.setState({matches: matches})
    }
  }

, render: function render () {
    var letters = this.props.word.split('')
    var matches = this.state.matches

    return (
      <div>
        <Word
          letters={letters}
          matches={matches}
        />
      </div>
    )
  }
})

var markup = (
  <App word="ted" />
)

ReactDOM.render(markup, document.getElementById('react'))

var React = require('react')
var ReactDOM = require('react-dom')
var keycode = require('keycode')
// components
var Word = require('./components/word/')

var App = React.createClass({
  getInitialState: function getInitialState () {
    return {
      typed: ''
    , matches: []
    }
  }

, componentDidMount: function componentDidMount () {
    document.addEventListener('keyup', function listener (event) {
      var typed = keycode(event)
      this.setState({typed: typed})
    }.bind(this))
  }

, render: function render () {
    var word = 'ted'
    var letters = word.split('')
    var typed = this.state.typed
    var matches = this.state.matches

    if (letters.includes(typed) && !matches.includes(typed)) {
      matches.push(typed)
      this.setState({matches: matches})
    }

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
  <App />
)

ReactDOM.render(markup, document.getElementById('react'))

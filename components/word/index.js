var React = require('react')
// components
var Letter = require('../letter/')

module.exports = React.createClass({
  propTypes: {
    letters: React.PropTypes.arrayOf(React.PropTypes.string)
  , matches: React.PropTypes.arrayOf(React.PropTypes.string)
  }

, render: function render () {
    var letters = this.props.letters.map(function map (letter, idx) {
      var selected = false
      if (this.props.matches.includes(letter)) {
        selected = true
      }
      return (
        <Letter
          key={idx}
          letter={letter}
          selected={selected}
        />
      )
    }, this)
    return (
      <div className="word">{letters}</div>
    )
  }
})

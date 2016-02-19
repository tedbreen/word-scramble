var React = require('react')
// components
var Letter = require('../letter/')

module.exports = React.createClass({
  propTypes: {
    matchedLetters: React.PropTypes.arrayOf(React.PropTypes.string)
  , unmatchedLetters: React.PropTypes.arrayOf(React.PropTypes.string)
  }

, render: function render () {
    var matchedLetters = this.props.matchedLetters.map(function map (letter, idx) {
      return (
        <Letter
          key={idx}
          letter={letter}
          selected
        />
      )
    })

    var unmatchedLetters = this.props.unmatchedLetters.map(function map (letter, idx) {
      var offset = matchedLetters.length

      return (
        <Letter
          key={idx + offset}
          letter={letter}
        />
      )
    })

    return (
      <div className="word">{matchedLetters.concat(unmatchedLetters)}</div>
    )
  }
})

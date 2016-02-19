var React = require('react')
// components
var Letter = require('../letter/')

module.exports = React.createClass({
  propTypes: {
    matchedLetters: React.PropTypes.arrayOf(React.PropTypes.string)
  , progress: React.PropTypes.oneOf(['won', 'lost'])
  , unmatchedLetters: React.PropTypes.arrayOf(React.PropTypes.string)
  }

, render: function render () {
    var matchedLetters = this.props.matchedLetters
    var unmatchedLetters = this.props.unmatchedLetters

    matchedLetters = matchedLetters.map(function map (letter, idx) {
      var letterStatus

      if (this.props.progress === 'won') {
        letterStatus = 'correct'
      }
      else if (this.props.progress === 'lost') {
        letterStatus = 'wrong'
      }
      else {
        letterStatus = 'matched'
      }

      return (
        <Letter
          key={idx}
          letter={letter}
          status={letterStatus}
        />
      )
    }, this)

    unmatchedLetters = unmatchedLetters.map(function map (letter, idx) {
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

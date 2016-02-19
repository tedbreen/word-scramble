var React = require('react')

module.exports = React.createClass({
  propTypes: {
    letter: React.PropTypes.string
  , status: React.PropTypes.oneOf(['matched', 'correct', 'wrong'])
  }

, render: function render () {
    var style = {
      backgroundColor: ''
    }
    var backgroundColor

    switch (this.props.status) {
      case 'matched':
        backgroundColor = 'yellow'
        break
      case 'correct':
        backgroundColor = 'green'
        break
      case 'wrong':
        backgroundColor = 'red'
        break
      default:
        backgroundColor = 'white'
        break
    }

    style.backgroundColor = backgroundColor

    return (
      <div style={style}>
        <h1>{this.props.letter}</h1>
      </div>
    )
  }
})

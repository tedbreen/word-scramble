var React = require('react')
var classnames = require('classnames')

module.exports = React.createClass({
  propTypes: {
    letter: React.PropTypes.string
  , status: React.PropTypes.oneOf(['unmatched', 'matched', 'correct', 'wrong'])
  }

, getDefaultProps: function getDefaultProps () {
    return {
      status: 'unmatched'
    }
  }

, render: function render () {
    var status = `letter-${this.props.status}`
    var classes = classnames('letter', status)

    return (
      <span className={classes}>{this.props.letter}</span>
    )
  }
})

var React = require('react')

module.exports = React.createClass({
  propTypes: {
    letter: React.PropTypes.string
  , selected: React.PropTypes.bool
  }

, render: function render () {
    var regular = {
      backgroundColor: 'white'
    }
    var selected = {
      backgroundColor: 'yellow'
    }

    return (
      <div style={this.props.selected ? selected : regular}>
        <h1>{this.props.letter}</h1>
      </div>
    )
  }
})

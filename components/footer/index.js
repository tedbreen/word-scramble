var React = require('react')

module.exports = React.createClass({
  propTypes: {
    linkName: React.PropTypes.string
  , url: React.PropTypes.string
  }

, render: function render () {
    return (
      <footer className="footer">
        <span>{'Made with React by '}</span>
        <a
          className="footer-link"
          href={this.props.url}
          target="_blank"
        >{this.props.linkName}
        </a>
      </footer>
    )
  }
})

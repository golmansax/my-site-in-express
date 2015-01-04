var React = require('react');

module.exports = React.createClass({
  getInitialProps: function () {
    return { url: '', text: '' };
  },
  render: function () {
    if (this.props.url) {
      return (
        <a href={this.props.url}>{this.props.text}</a>
      );
    } else {
      return <span>{this.props.text}</span>;
    }
  }
});

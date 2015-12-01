var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      text: ''
    }
  },
  render: function() {
    return <div className="input-group">
      <input
        value={this.state.text}
        onChange={this.handleInputChange}
        type="text"
        className="form-control" />
      <span className="input-group-btn">
        <button
          onClick={this.handleClick}
          className="btn btn-default"
          type="button">
          Add
        </button>
      </span>
      {this.state.text}
    </div>
  },
  handleClick: function() {
    console.log(this.state.text);
    //This is a test
  },
  handleInputChange: function(event) {
    this.setState({text: event.target.value});
  }
});

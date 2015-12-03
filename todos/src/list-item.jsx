var React = require('react');
var Firebase = require('firebase');
var rootURL = 'https://luminous-heat-9993.firebaseio.com/';

module.exports = React.createClass({

  getInitialState: function() {
    return {
      text: this.props.item.text,
      done: this.props.item.done,
      textChange: false
    }
  },
  componentWillMount: function() {
    this.fb = new Firebase(rootURL + 'items/' + this.props.item.key)
  },
  render: function() {
    return <div className="input-group">
      <span className="input-group-addon">
        <input
          type="checkbox"
          checked={this.state.done}
          onChange={this.handleDoneChange}
        />
      </span>
      <input type="text"
        className="form-control"
        value={this.state.text}
        onChange={this.handleTextChange}
        />
      <span className="input-group-btn">
        {this.changesButtons()}
        <button
          className="btn btn-default"
          onClick={this.handleDeleteClick}
          >
          Delete
        </button>
      </span>
    </div>
  },
  changesButtons: function() {
    console.log("changesButtons function 1");
    if(!this.state.textChanged) {
      return null
      console.log("The If");
    } else {
      console.log("The Else");
      return [
        <button className="btn btn-default">Save</button>,
        <button className="btn btn-default">Undo</button>
      ]
    }
  },
  handleTextChange: function() {
    this.setState({
      text: event.target.value,
      textChange: true
    });
  },
  handleDoneChange: function() {
    var update = {done: event.target.checked}
    this.setState(update)
    this.fb.update(update)
  },
  handleDeleteClick: function() {
    this.fb.remove()
  }
});

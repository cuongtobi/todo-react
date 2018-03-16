import React, { Component } from 'react';

export class AddForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      status: '1'
    };
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  }

  handleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.onClear();
  }

  onClear = () => {
    this.setState({
      name: '',
      status: '1'
    });
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <span>Add task</span>
          <span
            className="pull-right close-form"
            onClick={ this.onCloseForm }
          >Close</span>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit} >
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </div>
            <select
              name="status"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.status}
            >
              <option value="1">Active</option>
              <option value="0">Hidden</option>
            </select>
            <br />
            <button type="submit" className="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddForm;

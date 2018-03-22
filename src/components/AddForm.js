import React, { Component } from 'react';

export class AddForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: '',
      status: '1'
    };
  }

  componentWillMount() {
    if(this.props.task){
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps && nextProps.task){
      this.setState({
        id: nextProps.task.id,
        name: nextProps.task.name,
        status: nextProps.task.status
      });
    }
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
      id: '',
      name: '',
      status: '1'
    });
  }

  render() {
    var { id } = this.state;
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <span>{ id !== ''  ? 'Edit task' : 'Add task' }</span>
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
            <button type="submit" className="btn btn-primary">{ id !== '' ? 'Save' : 'Add' }</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddForm;

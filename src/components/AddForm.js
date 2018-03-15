import React, { Component } from 'react';

export class AddForm extends Component {
  onCloseForm = () => {
    this.props.onCloseForm();
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
          <form>
            <div className="form-group">
              <label>Title</label>
              <input type="text" name="name" className="form-control" />
            </div>
            <select name="status" className="form-control">
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

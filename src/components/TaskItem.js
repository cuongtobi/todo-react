import React, { Component } from 'react';

export class TaskItem extends Component {
  render() {
    return (
      <tr>
        <td>Hoc react js</td>
        <td>
          <span className="label label-success">Active</span>
        </td>
        <td>
          <span className="btn btn-warning action">Edit</span>
          <span className="btn btn-danger action">Delete</span>
        </td>
      </tr>
    );
  }
}

export default TaskItem;

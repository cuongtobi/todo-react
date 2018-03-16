import React, { Component } from 'react';

export class TaskItem extends Component {
  onChangeStatus = () => {
    var { stt } = this.props;
    this.props.onChangeStatus(stt);
  }

  onDeleteTask = () => {
    var { stt } = this.props;
    this.props.onDeleteTask(stt);
  }

  onEditTask = () => {
    var { stt } = this.props;
    this.props.onEditTask(stt);
  }

  render() {
    var { task, stt } = this.props;

    return (
      <tr key={ task.id }>
        <td>{ stt + 1 }</td>
        <td>{ task.name }</td>
        <td>
          <span
            className = {
              task.status === '1' ? 'label label-success' : 'label label-danger'
            }
            onClick = { this.onChangeStatus }
          >
            {task.status === '1' ? 'Active' : 'Hidden'}
          </span>
        </td>
        <td>
          <span
            className="btn btn-warning action"
            onClick={ this.onEditTask }
          >Edit</span>
          <span
            className="btn btn-danger action"
            onClick={ this.onDeleteTask }
          >Delete</span>
        </td>
      </tr>
    );
  }
}

export default TaskItem;

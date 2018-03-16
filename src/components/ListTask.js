import React, { Component } from 'react';
import Filter from './Filter'
import TaskItem from './TaskItem'

export class ListTask extends Component {
  render() {
    var { tasks } = this.props;
    if(tasks){
        var elmListTask = tasks.map((task, index) => {
        return <TaskItem
                  key={index}
                  stt={index}
                  task={task}
                  onChangeStatus={this.props.onChangeStatus}
                  onDeleteTask={this.props.onDeleteTask}
                  onEditTask={this.props.onEditTask}
                />
      });
    }

    return (
      <tbody>
        <Filter />
        {elmListTask}
      </tbody>
    );
  }
}

export default ListTask;

import React, { Component } from 'react';
import Filter from './Filter'
import TaskItem from './TaskItem'

export class ListTask extends Component {
  render() {
    return (
      <tbody>
        <Filter />
        <TaskItem />
      </tbody>
    );
  }
}

export default ListTask;

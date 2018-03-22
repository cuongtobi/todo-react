import React, { Component } from 'react';
import './App.css';
import AddForm from './components/AddForm'
import ListTask from './components/ListTask'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false,
      taskEdit: null,
      filter: {
        filterName: '',
        filterStatus: -1
      }
    }
  }

  componentWillMount() {
    if(localStorage && localStorage.getItem('tasks')){
      this.setState({
        tasks: JSON.parse(localStorage.getItem('tasks'))
      });
    }
  }

  dec2hex (dec) {
    return ('0' + dec.toString(16)).substr(-2)
  }

  generateId (len) {
    var arr = new Uint8Array((len || 40) / 2)
    window.crypto.getRandomValues(arr)
    return Array.from(arr, this.dec2hex).join('')
  }

  findIndexById = (id) => {
    var { tasks } = this.state;
    var r = -1;
    tasks.forEach(function (v, i) {
      if(v.id === id){
        r = i
      }
    });
    return r;
  }

  onDisplayForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm,
      taskEdit: null
    });
  }

  onDisplayEditForm = () => {
    this.setState({
      isDisplayForm: true
    });
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    });
  }

  onSubmit = (data) => {
    var { tasks } = this.state;
    var i = this.findIndexById(data.id);
    if(data.id === ''){
      data.id = this.generateId();
      tasks.push(data);
      this.setState({
        tasks: tasks
      });
    }else{
      tasks[i] = data;
      this.setState({
        tasks: tasks,
        taskEdit: null
      });
    }
    localStorage.setItem('tasks',JSON.stringify(tasks));
    this.onCloseForm();
  }

  onChangeStatus = (index) => {
    var { tasks } = this.state;
    tasks[index].status = tasks[index].status === '1' ? '0' : '1';
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onDeleteTask = (index) => {
    var { tasks } = this.state;
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onEditTask = (index) => {
    var { tasks } = this.state;
    this.setState({
      taskEdit: tasks[index]
    });
    this.onDisplayEditForm();
  }

  onFilter = (name, status) => {
    var filterStatus = parseInt(status, 10);
    this.setState({
      filter: {
        filterName: name,
        filterStatus: filterStatus
      }
    });
  }

  render() {
    var { tasks, isDisplayForm, taskEdit, filter } = this.state;
    if(filter.filterName){
      tasks = tasks.filter(function(task) {
        return task.name.toLowerCase().indexOf(filter.filterName) !== -1;
      });
    }
    tasks = tasks.filter(function(task) {
      if(filter.filterStatus === -1){
        return task;
      }else{
        return task.status === (filter.filterStatus === 1 ? "1" : "0");
      }
    });
    var elmAddForm = isDisplayForm === true ?
      <AddForm
        onSubmit={ this.onSubmit }
        onCloseForm={ this.onCloseForm }
        task = {taskEdit}
      /> : '';
    return (
      <div className="container-fluid">
        <div className="row">
          <h1 className="text-center">TODO LIST APP</h1>
        </div>
        <div className="row">
          <div className={ isDisplayForm === true ? 'col-md-4' : '' }>
            {elmAddForm}
          </div>
          <div className={ isDisplayForm === true ? 'col-md-8' : 'col-md-12' }>
            <button
              type="button"
              className="btn btn-primary"
              onClick={ this.onDisplayForm }
            >Add new task</button>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <ListTask
                tasks={ tasks }
                onChangeStatus={ this.onChangeStatus }
                onDeleteTask={ this.onDeleteTask }
                onEditTask={ this.onEditTask }
                onFilter={ this.onFilter }
              />
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import AddForm from './components/AddForm'
import ListTask from './components/ListTask'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false
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

  onDisplayForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    });
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    });
  }

  onSubmit = (data) => {
    var { tasks } = this.state;
    data.id = this.generateId();
    tasks.push(data);
    this.setState({
      tasks: tasks
    });
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
    this.onDisplayForm();
  }

  render() {
    var { tasks, isDisplayForm } = this.state;
    var elmAddForm = isDisplayForm === true ?
      <AddForm onSubmit={ this.onSubmit } onCloseForm={ this.onCloseForm } /> : '';
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
              />
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

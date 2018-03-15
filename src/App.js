import React, { Component } from 'react';
import './App.css';
import AddForm from './components/AddForm'
import ListTask from './components/ListTask'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: true
    }
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

  render() {
    var { isDisplayForm } = this.state;
    var elmAddForm = isDisplayForm === true ?
      <AddForm onCloseForm={ this.onCloseForm } /> : '';
    return (
      <div className="container-fluid">
        <div className="row">
          <h1 className="text-center">TODO LIST APP</h1>
        </div>
        <div className="row">
          <div className={isDisplayForm === true ? 'col-md-4' : ''}>
            {elmAddForm}
          </div>
          <div className={isDisplayForm === true ? 'col-md-8' : 'col-md-12'}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onDisplayForm}
            >Add new task</button>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <ListTask />
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

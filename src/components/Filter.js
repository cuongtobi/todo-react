import React, { Component } from 'react';

export class Filter extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterName: '',
      filterStatus: -1
    };
  }

  handleChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(
      name === 'filterName' ? value : this.state.filterName,
      name === 'filterStatus' ? value : this.state.filterStatus
    );
    this.setState({
      [name]: value
    });
  }

  render() {
    var { filterName, filterStatus } = this.state;
    return (
      <tr>
        <td></td>
        <td>
          <input
            type="text"
            value={ filterName }
            name="filterName"
            className="form-control"
            onChange={ this.handleChange }
          />
        </td>
        <td>
          <select
            name="filterStatus"
            value={ filterStatus }
            className="form-control"
            onChange={ this.handleChange }
          >
            <option value="-1">All</option>
            <option value="1">Active</option>
            <option value="0">Hidden</option>
          </select>
        </td>
        <td></td>
      </tr>
    );
  }
}

export default Filter;

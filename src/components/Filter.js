import React, { Component } from 'react';

export class Filter extends Component {
  render() {
    return (
      <tr>
        <td>
          <input type="text" name="" className="form-control" />
        </td>
        <td>
          <select name="status" className="form-control">
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

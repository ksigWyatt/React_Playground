import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <table class="titleBar">
        <tbody>
          <tr>
            <td>
              <img alt="App Icon" width="50" src="film-strip.svg"/>
            </td>
            <td width="8">
            </td>
            <td>
              <h1>Movies DB Search</h1>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    );
  }
}

export default App;

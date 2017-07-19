import React, { Component } from 'react';
import Projects from './Components/Projects'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: 'Bisiness Website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile App'
        },
        {
          title: 'Ecommerce Website',
          category: 'Web Development'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
          My App
          <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;

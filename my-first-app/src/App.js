import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects: [
        {
          id: uuid.v4(),
          title: 'Bisiness Website',
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile App'
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Website',
          category: 'Web Development'
        }
      ]
    });
  }

  handleAddProject(project) {
    //console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:  projects});
  }

  handleDeleteProject(id) {
      let projects = this.state.projects;
      // look through all the projects with the correct ID that we are trying to delete. 
      // If the IDs match then delete them
      let index = projects.findIndex(x => x.id === id);
      projects.splice(index, 1);
      this.setState({projects: projects});
  }

  render() {
    return (
      <div className="App">
          <AddProject addProject={this.handleAddProject.bind(this)}/>
          <Projects onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;

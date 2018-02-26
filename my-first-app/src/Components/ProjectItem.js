import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id) {
    console.log(id);
    this.props.onDelete(id); // passing ID to props so that the one you click is the one deleted
  }


  render() {
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong>: {this.props.project.category}
        <button onClick={this.deleteProject.bind(this, this.props.project.id)}>Remove</button>
      </li>
    );
  }
}

export default ProjectItem;
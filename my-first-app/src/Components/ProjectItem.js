import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id) {
    this.props.onDelete();
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
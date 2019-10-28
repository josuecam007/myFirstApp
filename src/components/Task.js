import React, { Component } from 'react';
import './Task.css';
import PropTypes from 'prop-types';

export default class Task extends Component {

    StyleCompleted(){
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ?  'line-through' : 'none'
        }
    }

  render() {

    const {task} = this.props;

    return (
      <div> 
        <p key={task.id} style={this.StyleCompleted()} >
          {task.title} - 
          {task.description} - 
          {task.done} - 
          {task.id}
          <input  type="checkbox" />
          <button>
              X
          </button>
        </p>
     </div>
    );
  }
}


Task.propTypes = {
  task: PropTypes.object.isRequired

}
import React, { Component } from 'react';

export default class componentName extends Component {

onSubmit = (e) => {
    e.preventDefault();
}

  render() {
    return (
      <form onSubmit={this.onSubmit}> 
          <input type="text" placeholder="Write a Task" />
          <br/>
          <br/>
          <textarea placeholder="write a description"></textarea>
          <br/>
          <input type="submit" />
      </form>
    );
  }
}

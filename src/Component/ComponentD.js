import React, { Component } from 'react';
import ComponentE from './ComponentE';

class ComponentD extends Component {
  render() {
    return (
      <div>
        <h1>Component D</h1>
        <ComponentE />
      </div>
    );
  }
}

export default ComponentD;

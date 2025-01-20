import React, { Component } from 'react';
import ComponentI from './ComponentI';

class ComponentH extends Component {
  render() {
    return (
      <div>
        <h1>Component H</h1>
        <ComponentI />
      </div>
    );
  }
}

export default ComponentH;

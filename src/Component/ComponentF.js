import React, { Component } from 'react';
import ComponentG from './ComponentG';

class ComponentF extends Component {
  render() {
    return (
      <div>
        <h1>Component F</h1>
        <ComponentG />
      </div>
    );
  }
}

export default ComponentF;

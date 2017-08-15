import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BaseRenderer from './components/BaseRenderer.js'

const mockParentObject = {
  id: '1',
  type: 'dict',
  content: {
    foo: {
      id: '2',
      type: 'array',
      content: [
        { id: '4', type: 'primitive', content: 1 },
        { id: '5', type: 'primitive', content: 'argh!'}
      ]
    }, baz: {
      id : '3',
      type: 'primitive',
      content: 'blah blah'
    }
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className='content'>
          <BaseRenderer data={mockParentObject}/>
        </div>
      </div>
    );
  }
}

export default App;

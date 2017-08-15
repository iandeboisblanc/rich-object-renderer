import React, { Component } from 'react';
import BaseRenderer from './BaseRenderer';

class PrimitiveRenderer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const content = this.props.content;
    if (typeof content === 'string' ) {
      return (
          <span style={{color:'red'}}>{`"${content}"`}</span>
      )
    }
    return (
      <span style={{color: 'green'}}>{content}</span>
    );
  }
}

export default PrimitiveRenderer;

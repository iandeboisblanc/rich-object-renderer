import React, { Component } from 'react';
import BaseRenderer from './BaseRenderer';

class ArrayRenderer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true,
    }
  }

  renderValues() {
    const content = this.props.content;
    // if (content === undefined || content === null) { return }
    return content.map((value, i) => {
      return (
        <div key={Math.random()}>
          <span>
            <BaseRenderer data={value}/>
            {i < content.length - 1 ? ', ' : ''}
          </span>
        </div>
      )
    });
  }

  toggleCollapsed() {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    });
  }

  render() {
    if (this.state.isCollapsed) {
      return this.renderCollapsed();
    }
    return (
      <span>
        <span onClick={this.toggleCollapsed.bind(this)}>v </span>
        <span>{'['}</span>
        <div style={{padding: '10px'}}>
          { this.renderValues() }
        </div>
        <span>{']'}</span>
      </span>
    );
  }

  renderCollapsed() {
    return <span onClick={this.toggleCollapsed.bind(this)}>
      <span>> </span>
      <span>
        {'[ '}
        <span style={{fontStyle: 'italic', color:'purple'}}>Array</span>
        {' ]'}
      </span>
    </span>
  }
}

export default ArrayRenderer;

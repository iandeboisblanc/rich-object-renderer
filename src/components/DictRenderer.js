import React, { Component } from 'react';
import BaseRenderer from './BaseRenderer';
const FaCaretRight = require('react-icons/lib/fa/caret-right');
const FaCaretDown = require('react-icons/lib/fa/caret-down');

class DictRenderer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true,
      content: undefined
    }
  }

  renderKeyValues() {
    // const content = this.state.content // for lazy loading
    const content = this.props.content;
    const keys = Object.keys(content);
    return keys.map((key, i) => {
      const value = content[key];
      return (
        <div key={Math.random()}>
          <span style={{color: 'blue'}}>{key}: </span>
          <span>
            <BaseRenderer data={value}/>
            {i < keys.length - 1 ? ', ' : ''}
          </span>
        </div>
      )
    });
  }

  /* For lazy loading
  openAndFetchContents() {
    if (this.state.content) {
      return this.setState({
        isCollapsed: false
      });
    }
    return this.props.fetchContents(this.props.dataId).then((data) => {
      this.setState({
        content: data.content,
        isCollapsed: false
      });
    })
  }
  */

  toggleCollapsed() {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    })
  }

  render() {
    if (this.state.isCollapsed) {
      return this.renderCollapsed();
    }
    return (
      <div>
        <span onClick={this.toggleCollapsed.bind(this)}><FaCaretDown/> </span>
        <span>{'{'}</span>
        <div style={{padding: '10px'}}>
          { this.renderKeyValues() }
        </div>
        <span>{'}'}</span>
      </div>
    );
  }

  renderCollapsed() {
    // return <span onClick={this.openAndFetchContents.bind(this)}>{'{ Object }'}</span> // For lazy loading
    return <span onClick={this.toggleCollapsed.bind(this)}>
      <span><FaCaretRight/> </span>
        <span>
          {'{ '}
          <span style={{fontStyle: 'italic', color:'purple'}}>Object</span>
          {' }'}
        </span>
    </span>
  }
}

export default DictRenderer;

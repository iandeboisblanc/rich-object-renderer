import React, { Component } from 'react';
import DictRenderer from './DictRenderer';
import PrimitiveRenderer from './PrimitiveRenderer';
import ArrayRenderer from './ArrayRenderer';
import db from '../db';

class BaseRenderer extends Component {
  constructor(props) {
    super(props);
  }

  fetchContents(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(db[id])
      }, 100);
    })
  }

  renderData() {
    const data = this.props.data;
    const type = data.type; // One of dict, array, primitive
    const id = data.id;
    const content = data.content;
    if (type === 'dict') {
      return <DictRenderer dataId={id} content={content} fetchContents={this.fetchContents} />
    }
    if (type === 'primitive') {
      return <PrimitiveRenderer dataId={id} content={content}></PrimitiveRenderer>
    }
    if (type === 'array') {
      return <ArrayRenderer dataId={id} content={content}></ArrayRenderer>
    }
  }

  render() {
    return (
      <span>
        { this.renderData() }
      </span>
    );
  }
}

export default BaseRenderer;

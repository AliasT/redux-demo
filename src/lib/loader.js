import React, { Component } from 'react'

export default class Loader extends Component {
  render() {
    const { isFetching, onClick, hidden, isWatingClick } = this.props;
    if (hidden) {
      return null;
    }

    if (isFetching) {
      return <p>正在加载...</p>
    }

    if (isWatingClick) {
      return <a href="#" onClick={ e=> onClick(e) }>加载更多</a>
    }

    return null;
  }
}

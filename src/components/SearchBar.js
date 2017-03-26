import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'

import '../sass/search.scss';

export default class SearchBar extends Component {
  state = {
    q: ''
  }

  onChange(e) {
    this.setState({ q: e.target.value });
  }

  render() {
    const { onSubmit } = this.props;
    return (
      <form className="search-control flex">
        <input className="flex-100" placeholder="输入搜索关键字" value={this.state.q} onChange={e => this.onChange(e)}/>
        <button onClick={ e => onSubmit(e, this.state.q) }>搜索</button>
      </form>
    )
  }
}




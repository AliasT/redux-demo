import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeKey, fetchSubjects } from '../actions';
import { Link } from 'react-router';
import SearchBar from '../components/SearchBar';
import SearchList from '../components/SearchList';
import Loader from '../lib/loader';

import '../sass/search.scss'

function getType (s) {
  const SUBJECT_TYPES = {
    'tv': '电视剧',
    'movie': '电影'
  }
  if (s) {
    return SUBJECT_TYPES[s]
  }
}

class Search extends React.Component {
  onSubmit(e, keyword) {
    e.preventDefault();
    const { dispatch, start, count } = this.props;
    dispatch(fetchSubjects({
      q: keyword,
      start: 0
    }));
  }

  loadMore(e) {
    e.preventDefault();
    const { dispatch, start, count } = this.props;
    dispatch(fetchSubjects({
      q: this.props.keyword,
      start: start + count
    }))
  }

  render() {
    const { isFetching, total, start, count, subjects, keyword } = this.props;
    return (
      <div id="search">
        <h2>豆瓣电影搜索</h2>
        <SearchBar onSubmit={(e, q) => this.onSubmit(e, q)} />

        <SearchList
          subjects={subjects}
          keyword={keyword}
          isFetching={isFetching}
        />

        <Loader
          isFetching={isFetching}
          onClick={e => this.loadMore(e)}
          isWatingClick={total - start >= count}
        />
      </div>
    );
  }
}

function mapStateToProps ({ subjects, search }, ownProps) {
  return {
    count: subjects.count,
    total: subjects.total,
    start: subjects.start,
    subjects: subjects.subjects,
    isFetching: subjects.isFetching,
    keyword: subjects.keyword
  }
}

export default connect(mapStateToProps)(Search)

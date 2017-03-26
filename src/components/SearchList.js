import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SearchList extends Component {
  static getType = (s) => {
    const SUBJECT_TYPES = {
      'tv': '电视剧',
      'movie': '电影'
    }
    if (s) {
      return SUBJECT_TYPES[s]
    }
  }

  render() {
    return (
      <div id="search-result-list">
        { this.props.subjects.length > 0 ? <h3>{this.props.keyword}&#12288;的搜索结果:</h3> : null }
        <ul>
        {
          this.props.subjects.map((subject, i) => {
            return (
              <li key={i} className="subject">
                <Link to={`/subject/${subject.id}`}>
                  <div className="flex">
                    <img src={subject.images.medium} title={subject.title}/>
                    <div className="flex-100">
                      <div className="subject-item subject-title"><h3>{subject.title}</h3></div>
                      <div className="subject-item">评分：<span className="rating">{subject.rating.average}</span></div>
                      <div className="subject-item">上映日期：{subject.year}</div>
                      <div className="subject-item">类型：{SearchList.getType(subject.subtype)}</div>
                      <div className="subject-item">分类：{subject.genres.join('/')}</div>
                    </div>
                  </div>
                </Link>
              </li>
            )
          })
        }
        </ul>
      </div>
    );
  }
}

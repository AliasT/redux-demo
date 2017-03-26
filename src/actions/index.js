const fetchJsonp = require("fetch-jsonp");
const querystring = require('querystring');

export const FETCH_SUBJECTS   = 'FETCH_SUBJECTS';   // 开始请求
export const RECEIVE_SUBJECTS = 'RECEIVE_SUBJECTS'; // 接受到请求
export const REQUEST_SUBJECTS = 'REQUEST_SUBJECTS'; // 正在请求

async function fetchDouban (path) {
  let res = await fetchJsonp(`http://api.douban.com${path}`);
  let json = await res.json();

  return json
}

/* 问题研究，如何尽可能的实现最优的state分片? */
export function changeKey(params) {
  return {
    type: CHANGE_KEY,
    q: params.q,
    start: params.start
  }
}

export function receiveTotal({ total }) {
  return {
    type: RECEIVE_TOTAL,
    total: total
  }
}

export function receiveMoreSubjects({ subjects }) {
  return {
    type: RECEIVE_MORE_SUBJECTS,
    subjects: subjects
  }
}

export function fetchSubjects(params) {
  return async (dispatch, getState) => {
    dispatch(requestSubjects(params));
    let json = await fetchDouban(`/v2/movie/search?${querystring.stringify(params)}`);
    dispatch(receiveSubjects(json));
  }
}

export function requestSubjects(params) {
  return {
    type: REQUEST_SUBJECTS,
    keyword: params.q,
    start: params.start
  }
}

export function receiveSubjects(json) {
  return {
    type: RECEIVE_SUBJECTS,
    subjects: json.subjects,
    total: json.total
  }
}

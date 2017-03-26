import {
  RECEIVE_SUBJECTS,
  REQUEST_SUBJECTS,
  RECEIVE_TOTAL,
  RECEIVE_MORE_SUBJECTS
} from '../actions';

import { combineReducers } from 'redux';


function subjects(state={
  subjects: [],
  isFetching: false,
  keyword: '',
  start: 0,
  count: 20
}, action) {
  switch(action.type) {
    case REQUEST_SUBJECTS:
      return {
        ...state,
        start: action.start,
        isFetching: true,
        keyword: action.keyword,
        subjects: action.start != 0 ? state.subjects : []
      };
    case RECEIVE_SUBJECTS:
      return {
        ...state,
        isFetching: false,
        total: action.total,
        subjects: [...state.subjects, ...action.subjects]
      };
    default:
      return state;
  }
}


export default combineReducers({ subjects })

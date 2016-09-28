import * as types from '../actions/action-types';

let points = [
  {p: 0, refRank: 1, b: '', c: 0},
  {p: 0, refRank: 2, b: '', c: 0},
  {p: 0, refRank: 3, b: '', c: 0},
  {p: 0, refRank: 4, b: '', c: 0},
  {p: 0, refRank: 5, b: '', c: 0},
  {p: 0, refRank: 6, b: '', c: 0},
  {p: 0, refRank: 7, b: '', c: 0},
];

const initialState = {
  isFetching: false,
  item: {},
  items: [],
  data: [],
  status: 200
};

const metricReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.GETTING_METRICS:
      return Object.assign({}, state, {isFetching: true});
    case types.GET_METRICS_SUCCESS:
      return Object.assign({}, state, {isFetching: false, items: action.items});
    case types.GET_METRICS_FAILURE:
      return Object.assign({}, state, {isFetching: false, status: action.status});

    case types.GETTING_METRIC:
      return Object.assign({}, state, {isFetching: true});
    case types.GET_METRIC_SUCCESS:
      return Object.assign({}, state, {isFetching: false, item: action.item, data: action.data});
    case types.GET_METRIC_FAILURE:
      return Object.assign({}, state, {isFetching: false, status: action.status});
  }

  return state;
};

export default metricReducer;

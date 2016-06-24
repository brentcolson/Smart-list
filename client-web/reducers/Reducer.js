import * as types from '../constants/ActionTypes';

/**
 *  Reducer related to Products
 */
export default (state = {
  users: [],
  items: []
}, action) => {
  switch (action.type) {
    case types.FETCH_USER_SUCCESS:
    return {
      ...state,
      users: action.payload
    }
    case types.FETCH_ITEM_SUCCESS:
    return {
      ...state,
      items: action.payload
    }
    default:
    return state;
  }
};

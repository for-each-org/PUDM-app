import { combineReducers } from 'redux';

import { UPDATE_USER_GROUP } from '../actions';

import { notificationData, userData } from "../../sampleData.js";

/* TODO: Will need to change this to use redux-saga or a similar library to handle API call */
const group_reducer = (state = { group: null }, { type, group }) => {
  if(type === UPDATE_USER_GROUP) {
    return { group };
  }
  return state;
};

const notifications_reducer = (state = notificationData, action) => state

const check_in_list_reducer = (state = userData, action) => state

export default combineReducers({
  group: group_reducer,
  notifications: notifications_reducer,
  users: check_in_list_reducer
});

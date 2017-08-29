import { combineReducers } from 'redux';

const initialState = {
  activeTab: 'load-balancers' // load-balancers, caches, message-queues, databases, others
};

const rootReducer = combineReducers({
  state: (state = initialState, action) => {
    if (action.type === 'CHANGE_ACTIVE_TAB') {
      return {
        ...state,
        activeTab: action.activeTab
      };
    }

    return state;
  }
});

export default rootReducer;

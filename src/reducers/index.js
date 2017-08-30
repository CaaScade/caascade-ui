import { combineReducers } from 'redux';

const initialState = {
  activeTab: 'databases', // load-balancers, caches, message-queues, databases, others
  selectedApp: ''
};

const rootReducer = combineReducers({
  state: (state = initialState, action) => {
    switch (action.type) {
    case 'CHANGE_ACTIVE_TAB':
      return {
        ...state,
        activeTab: action.activeTab
      };

    case 'CHANGE_SELECTED_APP':
      return {
        ...state,
        selectedApp: action.selectedApp
      };
    }

    return state;
  }
});

export default rootReducer;

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const initialState = {
  home: {
    activeTab: 'databases', // load-balancers, caches, message-queues, databases, others
    selectedApp: ''
  },
  launch: {
    postgresql: {
      version: 'v9.5.1'
    }
  }
};

const rootReducer = combineReducers({
  home: (state = initialState.home, action) => {
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
  },
  launch: (state=initialState.launch, action) => {
    return state;
  },
  routing: routerReducer
});

export default rootReducer;

import { combineReducers } from 'redux';

const initialState = {
  activeTab: 'databases', // load-balancers, caches, message-queues, databases, others
  selectedApp: '',
  isShowingAppModal: false,
  selectedAppConfig: {
    version: 'v9.5.1'
  }
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

    case 'HIDE_APP_MODAL':
      return {
        ...state,
        isShowingAppModal: false
      };

    case 'SHOW_APP_MODAL':
      return {
        ...state,
        isShowingAppModal: Boolean(state.selectedApp)
      };

    case 'SET_SELECTED_APP_CONFIG':
      return {
        ...state,
        selectedAppConfig: action.config
      };
    }

    return state;
  }
});

export default rootReducer;

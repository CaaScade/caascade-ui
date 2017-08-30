export const changeActiveTab = (activeTab) => ({
  type: 'CHANGE_ACTIVE_TAB',
  activeTab
});

export const changeSelectedApp = (selectedApp) => ({
  type: 'CHANGE_SELECTED_APP',
  selectedApp
});

export const hideAppModal = () => ({
  type: 'HIDE_APP_MODAL'
});

export const showAppModal = () => ({
  type: 'SHOW_APP_MODAL'
});

export const setSelectedAppConfig = (config) => ({
  type: 'SET_SELECTED_APP_CONFIG',
  config
});

export const changeActiveTab = (activeTab) => ({
  type: 'CHANGE_ACTIVE_TAB',
  activeTab
});

export const changeSelectedApp = (selectedApp) => ({
  type: 'CHANGE_SELECTED_APP',
  selectedApp
});

export const updateLaunchPostgresqlVersion = (version) => ({
  type: 'UPDATE_LAUNCH_POSTGRESQL_VERSION',
  version
});

export const updateLaunchPostgresqlForm = (form) => ({
  type: 'UPDATE_LAUNCH_POSTGRESQL_FORM',
  form
});

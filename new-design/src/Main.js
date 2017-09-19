import React from 'react';
import { Provider } from 'react-redux'; // eslint-disable-line
import createHistory from 'history/createBrowserHistory';
import createStore from './redux/create';
import MainRoute from './routes/index'; // eslint-disable-line
const history = createHistory();
const store = createStore(history, window.__INITIAL_STATE__);
class Main extends React.Component {
  render () {
    return (
      <Provider store={store}>
          <MainRoute history={history}/>
      </Provider>
    );
  }
}

export default Main;

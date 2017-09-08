import React from 'react';
import { Route, Redirect,BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
// import { Router } from 'react-router';
// import { load } from '../redux/modules/auth';
import Home from '../containers/Home'
import Dashboard from '../containers/Dashboard'
import Applicaton from '../containers/Application'
import Launch from '../containers/Launch'
import Monitor from '../containers/Monitor'

@connect(state => ({
  // user: state.auth.user
}))
class MainRoute extends React.Component {

  // componentWillMount = () => {
  //   const { dispatch } = this.props;
  //
  //   dispatch(load());
  // };

  render () {
    const checkAuth = {
      isAuthenticated: true
    };
    return (
      <div>
        <Router history={history}>
        <div>
          <Route path="/" component={Home} checkAuth={checkAuth} />
          <Route path="/applications" component={Applicaton} checkAuth={checkAuth} />
          <Route path="/launch" component={Launch} checkAuth={checkAuth} />
          <Route path="/monitor" component={Monitor} checkAuth={checkAuth} />
        </div>
        </Router>
      </div>
    );
  }
}

export default MainRoute;

const SignInRoute = ({ component: Component, checkAuth, ...rest }) => ( // eslint-disable-line
  <Route {...rest} checkAuth={checkAuth} render={props => (
    checkAuth.isAuthenticated ? (
      <Redirect to={{
        pathname: '/dashboard',
        state: { from: props.location }
      }}/>
    ) : (
      <Component {...props}/>
    )
  )}/>
);


const AuthRoute = ({ component: Component, checkAuth, parent: Parent, user, ...rest }) => ( // eslint-disable-line
  <Route {...rest} checkAuth={checkAuth} render={props => (
    checkAuth.isAuthenticated ? (
      Parent ? (
        <Parent><Component {...props}/></Parent>
      ) : (
        <Component {...props}/>
      )
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

const RedirectRoute = ({ redirectTo: redirectUrl, ...rest }) => ( // eslint-disable-line
  <Route {...rest} render={props => (
    <Redirect to={{
      pathname: redirectUrl,
      state: { from: props.location }
    }}/>
  )}/>
);

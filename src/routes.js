import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';
import Main from './components/Main';
import Home from './containers/Home';
import Login from './containers/Login';

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user,
  predicate: user => user.token,
  redirectAction: routerActions.replace,
  allowRedirectBack: false,
});

const UserIsNotAuthenticated = UserAuthWrapper({
  authSelector: state => state.user,
  redirectAction: routerActions.replace,
  predicate: user => !user.token,
  failureRedirectPath: '/',
  allowRedirectBack: false,
});

const routes = {
  path: '/',
  component: Main,
  childRoutes: [
    { path: 'login', component: UserIsNotAuthenticated(Login) },
  ],
  indexRoute: { component: UserIsAuthenticated(Home) },
};

export default routes;

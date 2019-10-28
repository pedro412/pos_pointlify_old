import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/App.scss';
import Home from '../containers/Home';
import SignIn from '../containers/SingIn';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import SignUp from '../containers/SignUp';
import Settings from '../containers/Settings';

const App = ({ user }) => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/'>
          {!user ? <Redirect to='/signin' /> : <Home />}
        </Route>
        <Route exact path='/settings'>
          {!user ? <Redirect to='/signin' /> : <Settings />}
        </Route>
        <Route exact path='/signin'>
          {user ? <Redirect to='/' /> : <SignIn />}
        </Route>
        <Route exact path='/signup'>
          {user ? <Redirect to='/' /> : <SignUp />}
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

const mapSateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapSateToProps, null)(App);

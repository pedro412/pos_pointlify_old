import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/App.scss';
import Home from '../containers/Home';
import Login from '../containers/Login';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import SignUp from '../containers/signup';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;

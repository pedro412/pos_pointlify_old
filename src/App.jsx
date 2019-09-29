import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/App.scss';
import Login from './components/Login';

const App = () => {
  return (
    <div className='container mt-5'>
      <Login />
    </div>
  );
};

export default App;

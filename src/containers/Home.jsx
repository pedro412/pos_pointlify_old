import React from 'react';
import { connect } from 'react-redux';

const Home = ({ user, userMetrics }) => {

  return (
    <div className='container'>
        home works!
      <p>
        Total de ordenes:
        {' '}
        {userMetrics.orders}
        {' '}
      </p>
    </div>
  );
};

const mapSateToProps = (state) => {
  return {
    user: state.user,
    userMetrics: state.userMetrics,
  };
};

export default connect(mapSateToProps, null)(Home);

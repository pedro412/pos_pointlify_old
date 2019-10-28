import React from 'react';
import { connect } from 'react-redux';

const Home = ({ user, userMetrics }) => {

  return (
    <div>
        home works!
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, officia?</p>
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

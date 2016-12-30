import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import JobList from '../components/JobList'
import '../styles/App.css';
import JobData from '../joblist'

class Home extends React.Component {

  render() {
    return (
      <div>
        <JobList
          jobs={JobData}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

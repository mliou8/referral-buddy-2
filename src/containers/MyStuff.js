import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import JobList from '../components/JobList';
import '../styles/app.css';
import JobData from '../joblist';

class MyStuff extends React.Component {
  componentWillMount() {
    this.props.actions.fetchFavoritedJobs();
  }

  render() {
    return (
      <div>
        <JobList
          jobs={JobData}
          onJobSelect={ selectedJob => this.props.actions.openModal({selectedJob})}
          onFavoriteSelect={ selectedJob => this.props.actions.favoriteJob({selectedJob}) }
          onFavoriteDeselect={ selectedJob => this.props.actions.unfavoriteJob({selectedJob}) }
          isAuthenticated={this.props.authenticated}
        />
      </div>
    );
  }
}
  
  function mapStateToProps(state) {
    return {
      authenticated: state.auth.authenticated,
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(Actions, dispatch)
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(MyStuff);


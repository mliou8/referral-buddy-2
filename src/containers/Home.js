import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import JobList from '../components/JobList'
import JobModal from '../components/JobModal'
import JobData from '../joblist'
import '../styles/app.css';

class Home extends React.Component {
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
         <JobModal 
           modalIsOpen={ this.props.modalIsOpen }
           selectedJob={ this.props.selectedJob }
           onRequestClose={ () => this.props.actions.closeModal() } />
           
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    selectedJob: state.modal.selectedJob,
    modalIsOpen: state.modal.ModalIsOpen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import JobList from '../components/JobList';


class MyStuff extends React.Component {
  componentWillMount() {
    this.props.actions.fetchFavoritedJobs();
  }

  render() {
    return (
      <div>
        <JobList gifs={ this.props.gifs }
                 onFavoriteSelect={ selectedGif => this.props.actions.favoriteGif({selectedGif}) }
                 onFavoriteDeselect={ selectedGif => this.props.actions.unfavoriteGif({selectedGif}) }
                 isAuthenticated={ this.props.authenticated }
                 isFavorite={true} />
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


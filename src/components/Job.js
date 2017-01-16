import React, {PropTypes} from 'react'
import Heart from './HeartIcon.js'
class Job extends React.Component {

  constructor(props) {
    super(props);
    this.state = { favorited: this.props.isFavorite };
    
  }
  
  favoriteJob() {
    this.setState({ favorited: true });
    this.props.onFavoriteSelect(this.props.job);
  }

  unfavoriteJob() {
    this.setState({ favorited: false });
    this.props.onFavoriteDeselect(this.props.job);
  }
    
  renderFavoriteJob() {
    if (!this.props.isAuthenticated) {
      return 'not authenticated';
    }
    if (this.state.favorited) {
      return <Heart onClick={() => this.unfavoriteJob()}></Heart>
    }
    return <Heart onClick={() => this.favoriteJob()}></Heart>
  }
  
  render() {
    return (
      <div className="job-item">
          { this.renderFavoriteJob() }      
          <img src="http://placehold.it/200x100" onClick={()=> this.props.onJobSelect(this.props.job)}></img>
      </div>
    );
  }
}

Job.proptypes = {
  text: PropTypes.string
}
export default Job

import React, {PropTypes} from 'react'
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
      return <i className="favorite fa fa-heart" onClick={() => this.unfavoriteJob()} />;
    }

    return <i className="favorite fa fa-heart-o" onClick={() => this.favoriteJob()} />;
  }
  
  render() {
    return (
      <div>
        This is a job listing!
        <ul>
          <li onClick={()=> this.props.onJobSelect(this.props.job)}> {this.props.job.text} </li> 
          <li>{this.renderFavoriteJob()}</li>  
        </ul>
      </div>
    );
  }
}

Job.proptypes = {
  text: PropTypes.string
}
export default Job

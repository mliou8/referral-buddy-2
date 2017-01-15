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
      return <input type="checkbox" checked="checked" onClick={() => this.unfavoriteJob()} />;
    }
    return <input type="checkbox" onClick={() => this.favoriteJob()} />;
  };
  
  render() {
    return (
      <div>
        This is a job listing!
        <ul>
          <li onClick={()=> this.props.onJobSelect(this.props.job)}> {this.props.text} </li> 
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

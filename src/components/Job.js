import React, {PropTypes} from 'react'

class Job extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.isChecked
    }
  }
  toggleChecked() {
    this.setState({checked: true});
  }


  render() {
    return (
      <div>
      This is one job amongst many.
        <ul>
          <li> {this.props.text} </li>
        </ul>
      </div>
    );
  }
}

Job.proptypes = {
  text: PropTypes.string
}
export default Job

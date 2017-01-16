import React from 'react';
import Job from './Job';


const JobList = (props) => {
  const jobList = props.jobs.map((job) => {
    return <Job
              key={job.id}
              job={job}
              onJobSelect={props.onJobSelect}
              isAuthenticated={props.isAuthenticated}
              isFavorite={props.isFavorite} 
              onFavoriteSelect={props.onFavoriteSelect}
              onFavoriteDeselect={props.onFavoriteDeselect}              
              />
  });

  return (
    <div className="job-list">{jobList}</div>
  );
};

export default JobList;

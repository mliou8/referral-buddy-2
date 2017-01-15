import React from 'react';
import Job from './Job';


const JobList = (props) => {
  const jobList = props.jobs.map((job) => {
    return <Job
              key={job.id}
              text={job.text}
              isAuthenticated={props.isAuthenticated}
              isFavorite={props.isFavorite} />
  });

  return (
    <div>{jobList}</div>
  );
};

export default JobList;

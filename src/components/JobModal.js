
import React from 'react';
import Modal from 'react-modal';

const JobModal = (props) => {
  if (!props.selectedJob) {
    return <div></div>;
  }

  return (
    <Modal
      isOpen={ props.modalIsOpen }
      onRequestClose={ () => props.onRequestClose() }
      contentLabel="This is a job">
      <div className="job-modal">
        <p><strong> {props.selectedJob.text} </strong> </p>
        <button onClick={() => props.onRequestClose()}>close</button>
      </div>
    </Modal>
  );
};

export default JobModal;

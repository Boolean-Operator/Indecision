import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
  isOpen={!!props.selectedOption}
  onRequestClose={props.handleClearSelectedOption}
  contentLabel="Selected Option"
  closeTimeoutMS={300}
  className="modal"
  >
    <h3 className="modal__title">
      Selected Option
    </h3>
    {props.selectedOption &&
      <p className="modal__body">
        {props.selectedOption}
      </p>}
    <button
      className="button"
      onClick={props.handleClearSelectedOption}
    >
      Sounds Good to Me
    </button>
  </Modal>  
  );

export default OptionModal;

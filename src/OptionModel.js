import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => {
    return(
        <Modal isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleClear}
        closeTimeoutMS={4000}
        className="modal"
        >
            
            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button onClick={props.handleClear}>Okay</button>
        </Modal>
    )
};

export default OptionModal;
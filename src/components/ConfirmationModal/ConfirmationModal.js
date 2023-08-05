import React from "react";

const ConfirmationModal = ({title,message,closeModal,successAction,modalData,actionButton}) => {
  return (
    <div>
      
      <div className="modal" id="deletemodal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <a onClick={()=>successAction(modalData)} href="#" className="btn btn-accent">
              {actionButton}
            </a>
            <a onClick={closeModal}  className="btn btn-outline">
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;

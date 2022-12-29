import React from "react";
import Modal from "react-modal";
import { Circles } from "react-loader-spinner";
import { FaTimes } from "react-icons/fa";
const AppModal = ({
  titleText,
  processName,
  warningMessage,
  showModal,
  setShowModal,
  setConfirmDeleteExpense,
  confirmDeleteExpense
}) => {
  return (
    <Modal
      className="app-modal"
      closeTimeoutMS={300}
      isOpen={showModal}
      contentLabel="Application modal"
      shouldCloseOnEsc = {true}
      shouldCloseOnOverlayClick = {true}
      onRequestClose = {() => setShowModal(false)}
    >
      <div className="app-modal__close-icon-container">
        <FaTimes
          className="app-modal__close-icon"
          onClick={() => setShowModal(false)}
        />
      </div>
      <div className="app-modal__content">
        {titleText && <h2 className="app-modal-content__title">{titleText}</h2>}
        {warningMessage && (
          <div className="app-modal-content__warning-message-container">
            <p className="app-modal-content__warning-message">
              {warningMessage}
            </p>
          </div>
        )}

        <div className="app-modal-content__delete-expense-buttons-container">
          {processName === "login or signup failure" && (
            <button
              className="app-modal-button remove--button"
              onClick={() => setShowModal(false)}
            >
              {confirmDeleteExpense ? (
                <Circles
                  height="20"
                  width="20"
                  radius="9"
                  color="white"
                  ariaLabel="loading"
                  wrapperStyle
                  wrapperClass
                />
              ) : (
                "Close"
              )}
            </button>
          )}
          {processName === "confirm deleting expense" && (
            <button
              className="app-modal-button cancel--button"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          )}
          {processName === "confirm deleting expense" && (
            <button
              className="app-modal-button remove--button"
              onClick={() => setConfirmDeleteExpense(true)}
            >
              {confirmDeleteExpense ? (
                <Circles
                  height="20"
                  width="20"
                  radius="9"
                  color="white"
                  ariaLabel="loading"
                  wrapperStyle
                  wrapperClass
                />
              ) : (
                "Delete"
              )}
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default AppModal;

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BsFillCheckCircleFill, BsFillAlarmFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { hideNotification } from "../../slices/notificationsSlice";

const NotificationCard = ({
  hideNotification,
  notificationMessage,
  notificationStatus,
}) => {
  useEffect(() => {
    const clearHideNotifTimeOut = setTimeout(() => {
      hideNotification();
    }, 3500);

    return () => {
      clearTimeout(clearHideNotifTimeOut);
    } 
  }, []);

  const decideIcon = () => {
    if (notificationStatus === "success") {
      return (
        <BsFillCheckCircleFill className="app-notification-card-content__status-icon app-notification--check-icon" />
      );
    } else if (notificationStatus === "fail") {
      return (
        <BsFillAlarmFill className="app-notification-card-content__status-icon app-notification--cross-icon" />
      );
    }
  };
  return notificationMessage ? (
    <div className="app-notification-card">
      <div className="app-notification-card__content">
        <div className="app-notification-card-content__status-icon-container">
          {decideIcon()}
        </div>
        <p className="app-notification-card-content__message">
          {notificationMessage}
        </p>
        <div className="app-notification-card-content__close-icon-container">
          <FaTimes className="app-notification-card-content__close-icon" onClick={() => hideNotification()}/>
        </div>
      </div>
    </div>
  ) : (
    <React.Fragment></React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    notificationMessage: state.notifications.message,
    notificationStatus: state.notifications.status,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    hideNotification: () => dispatch(hideNotification()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NotificationCard);

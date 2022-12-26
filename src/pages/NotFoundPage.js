import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <h2>
        The page you are looking for seems absent on our servers. If you think
        otherwise, feel free to contact our support staff.
      </h2>
      <Link to="/">Home</Link>
    </React.Fragment>
  );
};

export default NotFoundPage;

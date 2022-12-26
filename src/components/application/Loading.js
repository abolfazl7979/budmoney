// this loading is only used when fetching the expenses or refreshing the whole application or on first load of the application.
import React from "react";
import loader from "../../resources/application/loader.gif";

const Loading = () => {
  return (
    <div className="app-loader-img-container">
      <img className="app-loader__img" src={loader} alt="loading spinner" />
    </div>
  );
};

export default Loading;

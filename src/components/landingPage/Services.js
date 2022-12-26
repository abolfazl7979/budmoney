import React from "react";
import filterSvg from "../../resources/landingPage/svgs/filterSvg.svg";
import pieChartSvg from "../../resources/landingPage/svgs/pieChartSvg.svg";
import controlCostsSvg from "../../resources/landingPage/svgs/controlCostsSvg.svg";

const Services = () => {
  return (
    <div className="l-p-services" id="services">
      <h1 className="l-p-services__title">Our Services</h1>
      <div className="l-p-services__content">
        <div className="l-p-services-content__card">
          <img
            className="l-p-services-content-card__img"
            alt="services card"
            src={filterSvg}
          />
          <h2 className="l-p-services-content-card__title">
            Expenses Filtering
          </h2>
          <p className="l-p-services-content-card__paragraph">
            You can search, sort, and filter expenses by their categories or
            within a time period.
          </p>
        </div>
        <div className="l-p-services-content__card">
          <img
            className="l-p-services-content-card__img"
            alt="services card"
            src={pieChartSvg}
          />
          <h2 className="l-p-services-content-card__title">
            Expenses Pie Chart
          </h2>
          <p className="l-p-services-content-card__paragraph">
            You can view your expenses in a pie chart that helps you undrstand
            it much better.
          </p>
        </div>
        <div className="l-p-services-content__card">
          <img
            className="l-p-services-content-card__img"
            alt="services card"
            src={controlCostsSvg}
          />
          <h2 className="l-p-services-content-card__title">
            Control Your Costs
          </h2>
          <p className="l-p-services-content-card__paragraph">
            You can bring your expenses under control and improve your financial status.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

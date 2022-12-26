import React from "react";

const categoryObj = [
  ["#147fe4", "Housing"],
  ["#e8590c", "Transportation"],
  ["#2f9e44", "Grocery"],
  ["#5f3dc4", "Health care"],
  ["#087f5b", "Utility"],
  ["#fcc00c", "Entertainment"],
  ["#f03e3e", "Product"],
  ["#cd27f7", "Service"],
  ["#adb5bd", "Others"],
];

const PieChartCategories = () => {
  const produceCategoryItems = () => {
    return categoryObj.map((category) => {
      return (
        <div className="pie-chart-content-categories__category">
          <span
            style={{ background: `${category[0]}` }}
            className="pie-chart-content-category__color-box"
          ></span>
          <span className="pie-chart-content-category__text">
            {category[1]}
          </span>
        </div>
      );
    });
  };
  return (
    <div className="pie-chart-content__categories-container">
      {produceCategoryItems()}
    </div>
  );
};

export default PieChartCategories;

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import calcExpensesPerCategory from "../../../selectors/calcExpensesPerCategory";
import PieChartCategories from "./PieChartCategories";

const ExpensesPieChart = ({
  totalExpensesPerCategoryObj: {
    totalExpensesAmounts,
    housing,
    transportation,
    healthCare,
    grocery,
    utilities,
    entertainments,
    products,
    services,
    others,
  },
}) => {
  // convert each total each per category to a deg of 360
  const housingTo360 = (housing * 360) / totalExpensesAmounts;
  const transportationTo360 = (transportation * 360) / totalExpensesAmounts;
  const healthCareTo360 = (healthCare * 360) / totalExpensesAmounts;
  const groceryTo360 = (grocery * 360) / totalExpensesAmounts;
  const utilitiesTo360 = (utilities * 360) / totalExpensesAmounts;
  const entertainmentsTo360 = (entertainments * 360) / totalExpensesAmounts;
  const productsTo360 = (products * 360) / totalExpensesAmounts;
  const servicesTo360 = (services * 360) / totalExpensesAmounts;
  const othersTo360 = (others * 360) / totalExpensesAmounts;

  // string that goes for background in the div style for circle.
  const backgroundStyle = `repeating-conic-gradient(from 0deg, 
    #147fe4 0deg ${housingTo360}deg,
    #e8590c ${housingTo360}deg ${housingTo360 + transportationTo360}deg,
    #5f3dc4 ${housingTo360 + transportationTo360}deg ${
    housingTo360 + transportationTo360 + healthCareTo360
  }deg,
    #2f9e44 ${housingTo360 + transportationTo360 + healthCareTo360}deg ${
    housingTo360 + transportationTo360 + healthCareTo360 + groceryTo360
  }deg,
    #fcc00c ${
      housingTo360 + transportationTo360 + healthCareTo360 + groceryTo360
    }deg ${
    housingTo360 +
    transportationTo360 +
    healthCareTo360 +
    groceryTo360 +
    entertainmentsTo360
  }deg,
    #f03e3e ${
      housingTo360 +
      transportationTo360 +
      healthCareTo360 +
      groceryTo360 +
      entertainmentsTo360
    }deg ${
    housingTo360 +
    transportationTo360 +
    healthCareTo360 +
    groceryTo360 +
    entertainmentsTo360 +
    productsTo360
  }deg,
    #087f5b ${
      housingTo360 +
      transportationTo360 +
      healthCareTo360 +
      groceryTo360 +
      entertainmentsTo360 +
      productsTo360
    }deg ${
    housingTo360 +
    transportationTo360 +
    healthCareTo360 +
    groceryTo360 +
    entertainmentsTo360 +
    productsTo360 +
    utilitiesTo360
  }deg,
    #cd27f7 ${
      housingTo360 +
      transportationTo360 +
      healthCareTo360 +
      groceryTo360 +
      entertainmentsTo360 +
      productsTo360 +
      utilitiesTo360
    }deg ${
    housingTo360 +
    transportationTo360 +
    healthCareTo360 +
    groceryTo360 +
    entertainmentsTo360 +
    productsTo360 +
    utilitiesTo360 +
    servicesTo360
  }deg,
    #adb5bd ${
      housingTo360 +
      transportationTo360 +
      healthCareTo360 +
      groceryTo360 +
      entertainmentsTo360 +
      productsTo360 +
      utilitiesTo360 +
      servicesTo360
    }deg 360deg
    )`;

  return (
    <React.Fragment>
      <div className="app-page-header">
        <div className="app-content-container">
          <h1 className="app-page-header__title">Expenses Pie Chart</h1>
          <div className="app-page-header__actions">
            <Link className="app-button" to="/dashboard">
              Expenses List
            </Link>
          </div>
        </div>
      </div>
      <div className="app-content-container pie-chart-container">
        <div className="pie-chart__content">
          {totalExpensesAmounts ? (
            <React.Fragment>
              <h2 className="pie-chart-content__title">
                Expenses Pie Chart <br />
                <span style={{ fontSize: "1.6rem" }}>
                  (By Detailed Category)
                </span>
              </h2>
              <div
                style={{ background: `${backgroundStyle}` }}
                className="pie-chart-content__circle"
              ></div>
              <PieChartCategories />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <p className="pie-chart-content__no-amount-text">
                Your total expenses is 0$.
              </p>
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state, props) => {
  return {
    totalExpensesPerCategoryObj: calcExpensesPerCategory(state.expenses),
  };
};
export default connect(mapStateToProps)(ExpensesPieChart);

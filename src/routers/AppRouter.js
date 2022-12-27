import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import CreateExpensePage from "../pages/CreateExpensePage";
import DashboardPage from "../pages/DashboardPage";
import NotFoundPage from "../pages/NotFoundPage";
import EditExpensePage from "../pages/EditExpensePage";
import LoginPage from "../pages/LoginPage";
import ExpensesPieChartPage from "../pages/ExpensesPieChartPage";
import CustomRouter from "./CustomRouter";
import history from "./history";
import Loading from "../components/application/Loading";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";


// because of big size of landing page, we added lazy loading for this page, but other pages do not containe any huge size assets.
const LandingPage = lazy(() => import("../pages/LandingPage"));

const AppRouter = () => {
  return (
    <Suspense fallback = {<Loading />}>
      <CustomRouter history={history}>
        <Routes>
          <Route path="/" element={<PublicRoute component={LandingPage} />} />
          <Route
            path="/login"
            element={<PublicRoute component={LoginPage} />}
          />
          <Route
            path="/signup"
            element={<PublicRoute component={LoginPage} />}
          />
          <Route
            path="/pie-chart"
            element={<PrivateRoute component={ExpensesPieChartPage} />}
          />
          <Route
            path="/dashboard"
            element={<PrivateRoute component={DashboardPage} />}
          />
          <Route
            path="/create"
            element={<PrivateRoute component={CreateExpensePage} />}
          />
          <Route
            path="/edit/:expenseId"
            element={<PrivateRoute component={EditExpensePage} />}
          />
          <Route path="*" element={<PublicRoute component={NotFoundPage} />} />
        </Routes>
      </CustomRouter>
    </Suspense>
  );
};

export default AppRouter;

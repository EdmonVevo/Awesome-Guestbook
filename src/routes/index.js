import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { HOME } from "./route-codes";

const Homepage = lazy(() => import("components/pages/Homepage/Homepage"));

const MainRoutes = ({ user }) => {
  return (
    <Routes>
      <Route exact path={HOME} element={<Homepage />} />
    </Routes>
  );
};

export default MainRoutes;

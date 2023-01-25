import React from "react";
import { Route, Routes } from "react-router";
import AddPage from "../pages/add-page";
import DetailPage from "../pages/detail-page";
import HomePage from "../pages/home-page";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/add-page" element={<AddPage />}/>
        <Route path="/detail-page/:_id" element={<DetailPage />}/>
      </Routes>
    </div>
  );
};

export default Routing;

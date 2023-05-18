import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Dashboard } from "../Pages/Dashboard";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
};

export { MainRoute };

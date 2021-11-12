import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Dashboard from "../views/Dashboard";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import Navbar from "../components/Navbar";
import * as Middleware from "../middleware/App";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="mt-4" />
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="dashboard"
          element={<Middleware.Authenticated component={<Dashboard />} />}
        />
        <Route
          path="login"
          element={<Middleware.Guest component={<Login />} />}
        />
        <Route
          path="register"
          element={<Middleware.Guest component={<Register />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import React from "react";
import { Navigate } from "react-router-dom";

// auth protected routes
import { Dashboard } from "../screens/Dashboard/Dashboard";

// Authentication related pages
import Login from "../screens/Auth/Login";

const authProtectedRoutes = [
  //   {
  //     path: "/",
  //     exact: true,
  //     component: < Navigate to="/dashboard" />,
  //   },
  //   {
  //     path: "*",
  //     exact: true,
  //     component: < Navigate to="/dashboard" />,
  //   },
  { path: "/dashboard", component: <Dashboard /> },
];

const publicRoutes = [
  //   { path: "/sign", component: <SignIn /> },

  //below with the template
  //   { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  //   { path: "/forgot-password", component: <ForgetPwd /> },
  //   { path: "/register", component: <Register /> },
];

export { authProtectedRoutes, publicRoutes };

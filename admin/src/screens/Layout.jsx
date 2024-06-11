import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// imports
import { Nav } from "./components/Nav";
import { SideBar } from "./components/SideBar";

const Layout = () => {
  const showNav = window.location.pathname == "/login" ? false : true;
  if (!localStorage.getItem("token")) {
    useNavigate("/logi");
  }
  return (
    <>
      <div className="flex flex-col">
        {showNav && <SideBar className="w-[15%]" />}
        <Outlet className="w-[85%]" />
      </div>
    </>
  );
};

export default Layout;

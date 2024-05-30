import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

// imports
import { Nav } from "./components/Nav";

const Layout = () => {
  const [showNav, setShowNav] = useState(true);
  window.location.pathname == "/" ? setShowNav(false) : setShowNav(true);
  return (
    <>
      {/* {showNav && <Nav />} */}

      <Outlet />
    </>
  );
};

export default Layout;

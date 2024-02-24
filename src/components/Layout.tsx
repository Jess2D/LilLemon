import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../assets/ux/Logo .svg";
import Navbar from "./Nav.tsx";

function Layout() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <img src={logo} className="App-logo" alt="Logo" />
          <Navbar />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Test Footer</footer>
    </div>
  );
}

export default Layout;

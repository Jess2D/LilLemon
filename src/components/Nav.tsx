import React from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/specials">Specials</a>
          </li>
          <li>
            <a href="/booking">Reservations</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    to: "/",
    title: "Home"
  },
  {
    to: "/dashboard/products",
    title: "Products"
  },
  {
    to: "/login",
    title: "Login"
  },
  {
    to: "/dashboard",
    title: "Dashboard"
  },
  {
    to: "/settings",
    title: "Settings"
  }
];

function Navbar() {
  return (
    <div>
      <div
        style={{
          display: "flex"
        }}
      >
        {links.map(({ to, title }) => (
          <Link
            exact
            key={to}
            style={{ padding: 10 }}
            to={to}
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;

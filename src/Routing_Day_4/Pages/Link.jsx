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
      to:'/dashboard',
      title:"Dashboard"
  }, 
  {
    to: "/login",
    title: "Login"
  },
  {
    to: "/dashboard/settings",
    title: "Settings"
  }
];

function Links() {
  return (
    <div>
      <div
        style={{
          display: "flex"
        }}
      >
        {links.map(({ to, title} , index) => (
          <Link
            key={index}
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

export default Links;

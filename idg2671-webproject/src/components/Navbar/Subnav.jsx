import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  let Links = [
    { name: "All bookings", link: "/Admin/AllBookings" },
    { name: "Tools overview", link: "/Admin/ToolsOverview" },
    { name: "Users overview", link: "/Admin/UsersOverview" },
  ];

  return (
    <div className="w-full top-0 left-0">
      <div className="md:flex flex flex-wrap items-center justify-center text-base bg-blue-lighter md:px-10 h-14">
        <ul className="md:flex md:items-center h-14 text-base">
          {Links.map((link) => (
            <li key={link.name} className={`px-5 ${
              location.pathname === link.link ? "bg-grey-lighter flex items-center h-14" : ""
            }`}>
              <Link
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
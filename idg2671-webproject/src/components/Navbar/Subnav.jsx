import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  let Links = [
    { name: "ALL BOOKINGS", link: "/Admin/AllBookings" },
    { name: "TOOLS OVERVIEW", link: "/Admin/ToolsOverview" },
    { name: "USERS OVERVIEW", link: "/Admin/UsersOverview" },
  ];

  return (
    <div className="w-full top-0 left-0">
      <div className="md:flex flex flex-wrap items-center justify-between text-sm bg-blue-lighter md:px-10 h-14">
        <ul className="md:flex md:items-center">
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8">
              <Link
                to={link.link}
                className={`text-black ${
                  location.pathname === link.link ? "bg-grey-lighter p-4" : ""
                }`}
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
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function AdminSubnav() {
  const location = useLocation();

  let Links = [
    { name: "All bookings", link: "/admin/allBookings" },
    { name: "Tools overview", link: "/admin/toolsOverview" },
    { name: "Users overview", link: "/admin/usersOverview" }
  ];

  return (
    <div className="w-full top-0 left-0">
      <div className="flex flex-wrap items-center text-center justify-center text-base bg-blue-lighter px-10 h-14">
        <ul className="flex items-center h-14 text-base">
          {Links.map((link) => (
            <li key={link.name} className={`px-5 ${
              location.pathname.startsWith(link.link) ? "bg-grey-lighter flex items-center h-14" : ""
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
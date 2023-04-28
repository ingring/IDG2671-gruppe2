import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import NtnuLogoSmallWhite from "../../../src/assets/img/ntnu_uten_slagord_neg.png";
import AuthContext from "../../context/AuthProvider";

export default function Nav() {
  const location = useLocation();
  const { setAuth, auth } = useContext(AuthContext);

  console.log('Nav_Auth: ', auth);
  let loginState = 'Login';
  let LoginRoute = '/Login'
  if(auth.accesstoken) {
    loginState = 'Logout';
    LoginRoute = '/logout';
  }

  let Links = [
    { name: "Home", link: "/" },
    { name: "Tools", link: "/Tools" },
    { name: "My account", link: "/MyAccount/UserInformation" },
    { name: "Admin", link: "/Admin/AllBookings" }
  ];

  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="flex flex flex-wrap items-center justify-between text-base bg-blue-darker px-10 h-16">
        <img className="h-6 mr-3" src={NtnuLogoSmallWhite} alt="NTNU logo small"/>
        <ul className="flex items-center">{Links.map((link) => (
            <li key={link.name} className="md:ml-9">
              <Link to={link.link} className={`text-white hover:font-bold ${
                location.pathname === link.link ? "font-bold" : ""}`}
                >{link.name}</Link>
            </li>
          ))}
          <Link to={LoginRoute}>
            <button className="bg-blue-lighter ml-8 px-3 py-1 rounded-2xl hover:bg-blue-darker border hover:text-blue-lighter hover:border-blue-lighter">{loginState}</button>
          </Link>
        </ul>
      </div>
    </div>
  );
}
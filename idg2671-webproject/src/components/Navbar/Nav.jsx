import React from "react";
import NtnuLogoSmallWhite from "../../../src/assets/img/ntnu_uten_slagord_neg.png"

export default function Nav() {
    return (
      
<nav class="px-2 bg-blue-darker">
  <div class="container flex flex-wrap items-center justify-between ml-9 ">
        <img src={ NtnuLogoSmallWhite } alt="NTNU logo small" class="h-6 mr-3" />
    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul class="flex flex-col p-4 rounded-lg md:flex-row md:space-x-8 md:text-sm">
        <li>
          <a href="/" class="block text-white hover:font-bold">Home</a>
        </li>
        <li>
          <a href="/tools" class="block text-white hover:font-bold">Tools</a>
        </li>
        <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between text-white hover:font-bold">Booking tools <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
            {/* <!-- Dropdown menu --> */}
            <div id="dropdownNavbar" class="hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                <ul class="py-2 text-sm" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="/booking" class="block px-4 py-2 hover:bg-grey-lighter text-black">Booking</a>
                  </li>
                  <li>
                    <a href="" class="block px-4 py-2 hover:bg-grey-lighter text-black">Users</a>
                  </li>
                </ul>
            </div>
        </li>
        <li>
          <a href="/admin" class="block text-white hover:font-bold">Admin</a>
        </li>
        <li>
          <a href="/myaccount" class="block text-white hover:font-bold">My account</a>
        </li>
        <li>
          <a href="/login" class="block text-white hover:font-bold">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}

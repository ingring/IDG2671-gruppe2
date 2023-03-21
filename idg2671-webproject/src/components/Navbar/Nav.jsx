import React from "react";
import NtnuLogoSmallWhite from "../../../src/assets/img/ntnu_uten_slagord_neg.png"

export default function Nav() {
    let Links = [
        {name:"HOME",link:"/"},
        {name:"TOOLS",link:"Tools"},
        {name:"BOOKING",link:"Booking"},
        {name:"ADMIN",link:"Admin"},
        {name:"MY ACCOUNT",link:"MyAccount"},
        {name:"LOGIN",link:"Login"},
    ]
    return (
        <div className="shadow-md w-full top-0 left-0">
            <div className="md:flex flex flex-wrap items-center justify-between bg-blue-darker md:px-10 h-14">
            <img className="h-6 mr-3" src={ NtnuLogoSmallWhite } alt="NTNU logo small" />
            <ul className="md:flex md:items-center">
                {Links.map((link)=>(
                    <li key={link.name} className="md:ml-8">
                        <a href={link.link} className="text-white hover:font-bold">{link.name}</a>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    )
}

import React from "react";
import NtnuLogoSmallWhite from '../../assets/img/ntnu-logo-small-white.png'

function Footer() {
    return (
        <div className="bg-blue-darker text-white w-screen	h-40">
            <img className="w-20" src={NtnuLogoSmallWhite} alt="NTNU logo small" />
            <div className="">
                <h2 className="font-bold">Contact</h2>
                <p>email@something.no</p>
            </div>
            <div className="">
                <h2 className="font-bold">Adress</h2>
                <p>Raufossvegen 40, 2821 Gjøvik</p>
            </div>
            <div className="">
                <h2 className="font-bold">Workshop Responsible</h2>
                <p>Ida Parelius</p>
            </div>
        </div>
    )
}
export default Footer;
import React from "react";
import NtnuLogoSmallWhite from '../../assets/img/ntnu-logo-small-white.png'

function Footer() {
    return (
        <footer className="bg-blue-darker text-white w-screen h-auto w-screen p-12 flex">
            
            <img className="w-20 flex inline" src={ NtnuLogoSmallWhite } alt="NTNU logo small" />

            <div className="flex justify-evenly w-screen items-center">
                <div>
                    <h2 className="font-bold pb-6">Contact</h2>
                    <p>email@something.no</p>
                </div>
                <div>
                    <h2 className="font-bold pb-6">Address</h2>
                    <p>Raufossvegen 40, 2821 Gjøvik</p>
                </div>
                <div>
                    <h2 className="font-bold pb-6">Workshop Responsible</h2>
                    <p>Ida Parelius</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
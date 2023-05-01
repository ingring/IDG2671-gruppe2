import React from "react";
import NtnuLogoSmallWhite from '../../assets/img/ntnu-logo-small-white.png'

function Footer() {
    return (
        <footer className="bg-blue-darker text-white h-auto py-12 flex md:flex-row flex-col">
            <div className="flex flex-col md:flex-row md:justify-between w-screen items-center px-24">
                <div className="mb-10 md:mb-0 w-3/4 md:w-2/4">
                <img className="w-16 md:w-20" src={ NtnuLogoSmallWhite } alt="NTNU logo small" />
                </div>
            
                <div className="mb-6 md:mb-0 w-3/4">
                    <h2 className=" font-bold pb-3 md:pb-6">Contact</h2>
                    <p>email@something.no</p>
                </div>
                <div className="mb-6 md:mb-0 w-3/4">
                    <h2 className="font-bold pb-3 md:pb-6">Address</h2>
                    <p>Raufossvegen 40, 2821 Gjøvik</p>
                </div>
                <div className="mb-6 md:mb-0 w-3/4">
                    <h2 className="font-bold pb-3 md:pb-6">Workshop Responsible</h2>
                    <p>Ida Parelius</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
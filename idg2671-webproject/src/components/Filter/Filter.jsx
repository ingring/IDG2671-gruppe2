import React from "react";
import "flowbite";

function ListElement(props) {
    return <li><button className="text-left block px-8 py-5 w-44 text-white hover:text-blue-darker hover:bg-blue-lighter ">{props.tool}</button></li>
}

function DropdownArrow() {
    return (
        <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
    )
}

function Filter() {
    // Dette skal egt komme fra backend
    const tools = ['Laserkutter', '3D printer']
    return (
        <div className="relative">
            <div className="bg-blue-darker text-white flex justify-between p-4 rounded-lg w-full text-left">
                <div className="w-1/4">
                    <button id="dropdownToolBtn" data-dropdown-toggle="dropdownTool" className="text-white text-sm md:text-lg rounded-lg px-4 text-center inline-flex items-center hover:opacity-75" type="button">
                        Tools
                        <DropdownArrow />
                    </button>
                </div>
                <div className="w-1/4">
                    <button id="dropdownDateBtn" data-dropdown-toggle="dropdownDate" className="text-white text-sm md:text-lg rounded-lg px-4 text-center inline-flex items-center hover:opacity-75" type="button">
                        Date
                        <DropdownArrow />
                    </button>
                </div>
                <div className="w-1/4 px-4 text-sm md:text-lg text-center inline-flex items-center">Time</div>
                <div className="w-1/4 px-4 text-sm md:text-lg text-center inline-flex items-center">User</div>
            </div>

            <div id="dropdownTool" className="hidden bg-blue-darker z-10 rounded-lg shadow w-44 rounded-t-none absolute top-12 text-left">
                <ul className="py-2" aria-labelledby="dropdownToolBtn">
                    {tools.map((tool) => <ListElement tool={tool} />)}
                </ul>
            </div>

            {/* Her kunne jeg tenkt meg en kalender tihi */}
            <div id="dropdownDate" className="hidden bg-blue-darker z-10 rounded-lg shadow w-44 rounded-t-none absolute top-12 text-left">
                <div className="py-20" aria-labelledby="dropdownDateBtn">
                    
                </div>
            </div>
        </div>
    )
}
export default Filter;
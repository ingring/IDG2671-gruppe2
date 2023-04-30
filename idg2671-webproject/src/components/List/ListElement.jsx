import React from "react";

function ListElement({children}) {
    // max-w-prose
    return (
    <li className="odd:bg-blue-lighter even:bg-grey-light p-4 w-full text-left rounded-lg text-sm md:text-base">
        {children}
    </li>
    )
}

export default ListElement;
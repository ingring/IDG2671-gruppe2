import React from "react";

function ListElement({children}) {
    return (
    <li className="odd:bg-blue-lighter even:bg-grey-light p-4 max-w-prose text-left rounded-lg text-sm md:text-base">
        {children}
    </li>
    )
}

export default ListElement;
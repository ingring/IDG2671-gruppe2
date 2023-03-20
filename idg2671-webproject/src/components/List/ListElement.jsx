import React from "react";

function ListElement({children}) {
    return (
    <li className="odd:bg-blue-lighter even:bg-grey-lighter p-4 max-w-prose text-left rounded-lg">
        {children}
    </li>
    )
}

export default ListElement;
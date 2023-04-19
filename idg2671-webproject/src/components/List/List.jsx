import React from "react";
import "flowbite";

function List({children}) {
    return (
        // h-32
        <ul className="flex flex-col mb-5 max-w-prose h-96 overflow-scroll scrollbar-thin scrollbar-thumb-grey-medium scrollbar-track-grey-lighter overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
            {children}    
        </ul>
    )
}
export default List;
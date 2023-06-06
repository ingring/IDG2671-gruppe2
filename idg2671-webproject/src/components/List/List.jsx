import React from "react";

function List({children}) {
    return (
        // h-32
        <ul className="flex flex-col w-full max-h-96 overflow-scroll scrollbar-thin scrollbar-thumb-grey-mediumLight scrollbar-track-grey-light overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
            {children}    
        </ul>
    )
}
export default List;
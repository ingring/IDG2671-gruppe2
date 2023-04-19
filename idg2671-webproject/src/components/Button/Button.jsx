import React from "react";

const Button = (props) => {
    return (
        <button type={props.type} className="text-base flex items-center px-5 py-2 h-9 bg-blue-darker text-white hover:bg-blue-primary rounded-2xl shadow-md">
            {props.title}
        </button>
    )
}
export default Button;
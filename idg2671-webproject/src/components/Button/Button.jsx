import React from "react";

const Button = (props) => {
    return (
        <button className="w-28 h-8 bg-blue-darker text-white hover:bg-blue-primary rounded-2xl shadow-md">
            {props.title}
        </button>
    )
}
export default Button;
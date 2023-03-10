import React from "react";

const Button = (props) => {
    return (
        <button className="w-28 h-8 bg-blue-primary text-white rounded-2xl shadow-md">
            {props.title}
        </button>
    )
}
export default Button;
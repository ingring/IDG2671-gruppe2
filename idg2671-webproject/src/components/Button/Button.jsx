import React from "react";

const Button = (props) => {
    const title = props.title;
    return (
        <button className="w-28 h-8 bg-blue-primary text-white rounded-lg shadow-md">
            {title}
        </button>
    )
}
export default Button;
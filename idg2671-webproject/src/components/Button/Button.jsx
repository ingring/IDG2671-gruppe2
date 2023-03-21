import React from "react";

const Button = (type="", title) => {

    return (
        <button type={type} className="w-24 h-9 bg-blue-darker text-white hover:bg-blue-primary rounded-2xl shadow-md">
            {title}
        </button>
    )
}
export default Button;
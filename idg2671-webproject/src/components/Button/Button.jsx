import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
    return (
        <Link to={props.to} className="text-base w-fit flex items-center px-5 py-2 h-9 bg-blue-darker text-white hover:bg-blue-primary rounded-2xl shadow-md">
            {props.title}
       </Link>
    )
}
export default Button;
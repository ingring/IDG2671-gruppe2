import React from "react";

const InputButton = (props) => {
    return (
        <input type="submit" value={props.value} className="w-fit text-base flex items-center justify-center px-5 p-2 bg-blue-darker text-white hover:bg-blue-primary rounded-2xl shadow-md">
        </input>
    )
}
export default InputButton;
import React from "react";
import Button from '../Button/Button';

function Card() {
    return (
        <div className="bg-blue-lighter h-96 w-80 rounded-xl shadow-md">
            <h3 className="font-bold">Tool</h3>
            <img className="rounded-xl" src="#" alt="#" />
            <p>Course</p>
            <Button title="hei"></Button>
        </div>
    )
}
export default Card;
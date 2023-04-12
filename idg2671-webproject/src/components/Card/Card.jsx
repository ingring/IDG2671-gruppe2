import React from "react";
import Button from '../Button/Button';

export default function Card(props) {
    return (
        <div className="bg-blue-lighter h-auto w-2/12 rounded-xl shadow-md p-5">
            <h3 className="font-bold pb-7">{props.title}</h3>
            <img className="rounded-md mb-8" src={props.imgSrc} alt={props.imgAlt} />
            <p className="pb-7">Course: {props.course}</p>
            <Button title="Book"/>
        </div>
    )
}
import React from "react";
import Button from '../Button/Button';

export default function Card(props) {
    return (
        <div className="flex flex-col items-center bg-blue-lighter h-auto w-3/4 md:w-4/12 rounded-xl shadow-md py-5 px-4 mb-14 md:mx-2">
            <h3 className="font-bold pb-7 text-base">{props.title}</h3>
            <img className="rounded-md mb-8" src={props.imgSrc} alt={props.imgAlt} />
            <p className="pb-7 text-sm md:text-base">Course: {props.course}</p>
            <Button to={props.to} title="Book"/>
        </div>
    )
}
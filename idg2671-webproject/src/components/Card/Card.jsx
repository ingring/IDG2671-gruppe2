
import React from "react";
import Button from '../Button/Button';
import Image from '../../assets/img/3d-printer.jpeg'

export default function Card() {
    return (
        <div className="bg-blue-lighter h-auto w-2/12 rounded-xl shadow-md p-5">
            <h3 className="font-bold pb-7">Tool</h3>
            <img className="rounded-md mb-8" src={Image} alt="." />
            <p className="pb-7">Course: HMS</p>
            <Button title="Book"/>
        </div>
    )
}
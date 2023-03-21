import React from "react";
import Button from "../Button/Button";

export default function BookTool(props) {
    return (  
        
        <div className="BookTool w-9/12 flex justify-center flex-col">
            <form action="POST">
                <h1 className="md:text-3xl mb-6">Book tool</h1>
            
                <h3 className="font-semibold mb-1">Tool</h3>
                <p className="mb-6">{props.tool}</p>

                <h3 className="font-semibold mb-1">Date</h3>
                <p className="mb-6">{props.date}</p>
                
                <h3 className="font-semibold mb-1">Time</h3>
                <p className="mb-6">{props.time}</p>

                <h3 className="font-semibold mb-1">Duration</h3>
                <p className="mb-6">{props.duration}</p>

                <h3 className="font-semibold mb-1">Description</h3>
                <input className="mb-6" type="text" name="" id="" />

                <Button type="submit" title="Confirm"/>
            </form>
        </div>
    )
}


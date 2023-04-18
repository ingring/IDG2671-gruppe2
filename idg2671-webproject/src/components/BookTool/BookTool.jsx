import React from "react";
import InputButton from "../Button/InputButton";
import { useSelectedDate } from "../Calendar/Calendar";

export default function BookTool(props) {
    console.log(useSelectedDate());
    return (
        <div className="flex justify-center flex-col bg-grey-light p-20 rounded-2xl shadow-md">
            <form action="POST">
                <h3 className="font-semibold mb-2">Tool</h3>
                <p className="mb-8">{props.tool}</p>

                <h3 className="font-semibold mb-2">Date</h3>
                <p className="mb-8">{props.date}</p>

                <h3 className="font-semibold mb-2">Time</h3>
                <p className="mb-8">{props.time}</p>

                <h3 className="font-semibold mb-2">Duration</h3>
                <p className="mb-8">{props.duration}</p>

                <h3 className="font-semibold mb-2">Description</h3>
                <input className="h-20 mb-8 text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full p-2.5 dark:bg-grey-lighter" type="text" name="" id="" />
                
                <InputButton value="Confirm" />
            </form>
        </div>
    )
}


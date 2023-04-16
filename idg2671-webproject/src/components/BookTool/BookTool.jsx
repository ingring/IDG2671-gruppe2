import React from "react";
import Button from "../Button/Button";
import { useSelectedDate } from "../Calendar/Calendar";

export default function BookTool(props) {
    console.log(useSelectedDate());
    return (
        <div className="flex justify-center flex-col">
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
                <input className="mb-8 text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full p-2.5 dark:bg-grey-lighter" type="text" name="" id="" />

                <Button type="submit" title="Confirm" />
            </form>
        </div>
    )
}


import React, { useContext } from "react";
import InputButton from "../Button/InputButton";
import { DateContext } from '../../context/CalendarContext';
const moment = require('moment');

export default function BookTool(props) {

    const {chosenDate, chosenTime} = useContext(DateContext)
    console.log(chosenTime);
    const formattedDate = chosenDate.format("D MMMM YYYY");


    return (
        <div className="flex bg-grey-light justify-center rounded-2xl shadow-md px-14 py-16 md:px-40">
            <form className="w-full" action="">
                <div className="pb-2">
                    <label htmlFor="tool" className="text-xl mb-4 text-left">Tool</label>
                    <p name="tool" id="tool" className="mb-8">{props.tool}</p>
                </div>
                <div className="pb-2">
                    <label htmlFor="date" className="text-xl mb-4 text-left">Date</label>
                    <p name="tool" id="date" className="mb-8">{String(formattedDate)}</p>
                </div>
                <div className="pb-2">
                    <label htmlFor="time" className="text-xl mb-4 text-left">Time</label>
                    <p name="tool" id="time" className="mb-8">{chosenTime?.start} - {chosenTime?.end}</p>
                </div>
                {/* Kan ikkje rekne på duration fordi klokkesletta er string og ikkje numbers
                <div className="pb-2">
                    <label htmlFor="duration" className="text-xl mb-4 text-left">Duration</label>
                    <p name="duration" id="duration" className="mb-8"></p>
                </div> */}
                <div className="pb-8">
                    <label htmlFor="Comments" className="text-xl mb-4 text-left">Comments</label>
                    <input type="text" name="comments" id="comments" className="text-left p-2 border-grey-mediumLight rounded-md w-full pb-20 "/>
                </div>
                <InputButton value="Confirm" />
            </form>
        </div>
    )
}


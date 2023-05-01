import React, { useContext, useState } from "react";
import InputButton from "../Button/InputButton";
import { DateContext } from '../../context/CalendarContext';
import  AuthContext  from "../../context/AuthProvider";
import useAxiosPrivate from "../../axios/useAxiosPrivate";

export default function BookTool() {

    const {chosenDate, chosenTime} = useContext(DateContext)
    const {toolName, auth, toolId } = useContext(AuthContext)
    const date = chosenDate._d
    const formattedDate = ("0" + date.getDate()).slice(-2) + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + date.getFullYear();

    const axiosPrivate = useAxiosPrivate();

    const [description, setDescription] = useState()

    console.log('Åkei Trym', chosenTime)
    console.log('Åkei åkei', toolId)
    const URL = `api/bookable_tools/book/${toolId}`

    console.log('URL: ', URL);
    
    const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        const response = await axiosPrivate.post(URL, 
        {
            date: formattedDate,
            start_time: chosenTime.start,
            end_time: chosenTime.end,
            username: auth.username,
            description: description
      });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleChange = (event) => {
        setDescription(event.value)
    };

    return (
        <div className="flex bg-grey-light justify-center rounded-2xl shadow-md px-14 py-16 md:px-40">
            <form className="w-full" onSubmit={handleSubmit}>
                <div className="pb-2">
                    <label htmlFor="tool" className="text-xl mb-4 text-left">Tool</label>
                    <p name="tool" id="tool" className="mb-8">{toolName}</p>
                </div>
                <div className="pb-2">
                    <label htmlFor="date" className="text-xl mb-4 text-left">Date</label>
                    <p name="tool" id="date" className="mb-8">{String(formattedDate)}</p>
                    {/* <p name="tool" id="date" className="mb-8">{String(chosenDate._d)}</p> */}
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
                    <input type="text" name="comments" id="comments" 
                    className="text-left p-2 border-grey-mediumLight rounded-md w-full pb-20 " 
                    value={description} onChange={handleChange}/>
                </div>
                <InputButton value="Confirm" />
            </form>
        </div>
    )
}


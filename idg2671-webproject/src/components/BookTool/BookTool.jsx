import React, { useContext, useState } from "react";
import InputButton from "../Button/InputButton";
import { DateContext } from '../../context/CalendarContext';
import  AuthContext  from "../../context/AuthProvider";
import useAxiosPrivate from "../../axios/useAxiosPrivate";
import { useNavigate } from 'react-router-dom';


export default function BookTool() {
    //navigate to my bookings
    const navigate = useNavigate();

    //Declare error (user in UI)
    const [errorMsg, setErrorMsg]  = useState('')

    const {chosenDate, chosenTime} = useContext(DateContext)
    const {toolName, auth, toolId } = useContext(AuthContext)
    const date = chosenDate._d
    const formattedDate = ("0" + date.getDate()).slice(-2) + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + date.getFullYear();

    const axiosPrivate = useAxiosPrivate();

    const [description, setDescription] = useState()

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
        navigate('/MyAccount/MyBookings');
      } catch (error) {
        setErrorMsg(error.response.data);
        console.log(error.response.data);
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
                <div className="pb-8">
                    <label htmlFor="Comments" className="text-xl mb-4 text-left">Comments</label>
                    <textarea name="comments" id="comments" 
                    className="text-left p-2 border-grey-mediumLight rounded-md w-full pb-20 " 
                    value={description} onChange={handleChange}></textarea>
                </div>
                <InputButton value="Confirm" />
                {errorMsg && <div class="bg-red-100 border mt-5 border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert"><p className="block sm:inline">{errorMsg}</p></div>}
                <div class="bg-green-100 border mt-5 border-green-400 text-green-700 px-4 py-3 rounded relative"></div>
            </form>
        </div>
    )
}


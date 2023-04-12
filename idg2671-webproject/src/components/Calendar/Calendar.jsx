import React, { useState, useEffect } from "react";
import moment from "moment";

import buildCalendar from "./BuildCalendar";
import dayStyles, { beforeToday } from "./CalendarStyles";
import CalendarHeader from "./CalendarHeader";
import Button from "../Button/Button";

import "./Calendar.css";

// Function to get values in booking
export const useSelectedDate = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateSelect = (date) => {
        setSelectedDate(date);
    }
  return [selectedDate, handleDateSelect];
}

// Kilde: https://www.youtube.com/watch?v=5jRrVqRWqsM
export default function Calendar({ value, onChange }) {
     // State variable
     const [calendar, setCalendar] = useState([]);
     const [selectedDate, setSelectedDate] = useState(value);
     
     //Mounting the component
     useEffect(() => {
         setCalendar(buildCalendar(value));
         setSelectedDate(value);
     }, [value]);

    function handleDateClick(day) {
        if (!beforeToday(day)) {
          setSelectedDate(day);
          onChange(day);
        }
    }

    return (
        <div className="calendar">
          <CalendarHeader value={selectedDate} setValue={setSelectedDate} />
          <div className="calendarBody">
            <div className="day-names">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                <div className="week">{d}</div>
              ))}
            </div>
            {calendar.map((week) => (
              <div>
                {week.map((day) => (
                  <div
                    className="day"
                    onClick={() => handleDateClick(day)}
                  >
                    <div className={dayStyles(day, selectedDate)}>
                      {day.format("D").toString()}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="mt-8">
            Date selected: {selectedDate.format("D MMMM YYYY")}
          </p>
          <p>{moment().format("L")}</p> 
          <Button type="submit" title="Continue" />
        </div>
      );
}   
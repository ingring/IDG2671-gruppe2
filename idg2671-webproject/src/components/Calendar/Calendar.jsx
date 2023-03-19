import React, { useState, useEffect } from "react";
import moment from "moment";

import buildCalendar from "./BuildCalendar";
import dayStyles, { beforeToday } from "./CalendarStyles";
import CalendarHeader from "./CalendarHeader";

import "./Calendar.css";

// Kilde: https://www.youtube.com/watch?v=5jRrVqRWqsM
export default function Calendar({ value, onChange, onSelect }) {
    // State
    const [calendar, setCalendar] = useState([]);
    
    useEffect(() => {
        setCalendar(buildCalendar(value));
    }, [value]);

    return (
        <div className="calendar">
            <CalendarHeader value={value} setValue={onChange} />
            <div className="calendarBody">
                <div className="day-names">
                    {["Mon", "Thue", "Wed", "Thur", "Fri", "Sat", "Sun"].map((d) => (
                        <div className="week">{d}</div>
                    ))}
                </div>
                {calendar.map((week) => (
                    <div>
                        {week.map((day) => (
                            <div className="day" onClick={() => !beforeToday(day) && onChange(day)}>
                                <div className={dayStyles(day, value)}>{day.format("D").toString()}</div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {/* Klarer ikke å finne ut hvordan jeg skal få hentet datoen vi klikker på */}
            <p>Date chosen: </p>
        </div>
    )
}   
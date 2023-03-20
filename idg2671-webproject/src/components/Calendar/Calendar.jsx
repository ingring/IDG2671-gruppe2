import React, { useState, useEffect } from "react";
import moment from "moment";

import buildCalendar from "./BuildCalendar";
import dayStyles, { beforeToday } from "./CalendarStyles";
import CalendarHeader from "./CalendarHeader";
import Button from "../Button/Button";

import "./Calendar.css";

let jsonData  = {
    "_id": "123456",
    "start_time":"2023-04-13T09:04:45.904Z",
    "end_time":"2023-04-14T09:04:45.904Z"
}

// Kilde: https://www.youtube.com/watch?v=5jRrVqRWqsM
export default function Calendar({ value, onChange }) {

    // Return current day 
    function currDay() {
        return value.format("DD")
    }
    // Return current month
    function currMonth() {
        return value.format("MMMM")
    }
    // Return current year
    function currYear() {
        return value.format("YYYY")
    }

    // https://stackoverflow.com/questions/20841466/how-to-convert-json-date-format-to-normal-date-format-ex-date1388412591038
    function ConvertJsonDateString(jsonDate) {
        var shortDate = null;
        if (jsonDate) {
            var regex = /-?\d+/;
            var matches = regex.exec(jsonDate);
            var dt = new Date(parseInt(matches[0]));
            var month = dt.getMonth() + 1;
            var monthString = month > 9 ? month : '0' + month;
            var day = dt.getDate();
            var dayString = day > 9 ? day : '0' + day;
            var year = dt.getFullYear();
            shortDate = monthString + '/' + dayString + '/' + year;
        }
        return shortDate;
    };

    //const dateIso = new Date();
    const jsonDate = jsonData.start_time;
    console.log(jsonDate);
    const date = ConvertJsonDateString(jsonDate);

    // State
    const [calendar, setCalendar] = useState([]);
    
    //Mounting the component
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
            <p className="mt-8">Date chosen: {currDay()} {currMonth()} {currYear()}</p>
            <p>{moment().format('L')}</p>
            <p>{date}</p>
            <Button title="Continue" />
        </div>
        // https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/13-as-json/
    )
}   
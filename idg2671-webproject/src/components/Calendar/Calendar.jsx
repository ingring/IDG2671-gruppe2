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


// * Hjelpefunksjon for å finne booked tid
function isBookedTime(time, dbArray, selectedDate) {
  const bookings = dbArray.filter((booking) => booking.date === selectedDate.format("DD-MM-YYYY"));
  for (const booking of bookings) {
    const start = moment(booking.start_time, "HH:mm");
    const end = moment(booking.end_time, "HH:mm");
    if (moment(time, "HH:mm").isBetween(start, end, null, "[]")) {
      return true;
    }
  }
  return false;
}

// * Timeslot component
function CalendarTime({ selectedDate }) {

  // Create all the timeslots with 15 minutes intervals
  const times = [];
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j += 15) {
      const hours = i < 10 ? "0" + i : i;
      const minutes = j === 0 ? "00" : j;
      times.push(`${hours}:${minutes}`);
    }
  }

  // State to keep track of the selected time
  //const [selectedTime, setSelectedTime] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  // Function to handle the select change event
  const handleTimeClick = (time) => {
    if (!isBookedTime(time, datesFromDatabase, selectedDate)) {
      if (start === "") {
        setStart(time);
      } else if (end === "" && moment(time, "HH:mm").isAfter(moment(start, "HH:mm"))) {
        setEnd(time);
      } else {
        setStart(time);
        setEnd("");
      }
    }
  };
  // const handleTimeClick = (time) => {
  //   setSelectedTime(time);
  // };

  const datesFromDatabase = [
    {
      date: '20-04-2023',
      start_time: '10:00',
      end_time: '12:00'
    },
    {
      date: '22-04-2023',
      start_time: '09:15',
      end_time: '13:00'
    },
    {
      date: '20-04-2023',
      start_time: '13:15',
      end_time: '15:45'
    },
    {
      date: '22-04-2023',
      start_time: '13:30',
      end_time: '15:00'
    },
    {
      date: '25-04-2023',
      start_time: '18:00',
      end_time: '21:00'
    }
  ]

  const selectedTimes = [];
  if (start !== "" && end !== "") {
    const startTime = moment(start, "HH:mm");
    const endTime = moment(end, "HH:mm");
    times.forEach((time) => {
      const currentTime = moment(time, "HH:mm");
      if (currentTime.isBetween(startTime, endTime, null, "[]")) {
        selectedTimes.push(time);
      }
    });
  }

  return (
    <div className="timeslots">
      {times.map((time) => (
        <button
          key={time}
          className={`
            ${start === time ? "selected-start" : ""} 
            ${end === time ? "selected-end" : ""} 
            ${selectedTimes.includes(time) ? "selected-between" : ""}
            ${isBookedTime(time, datesFromDatabase, selectedDate) ? "booked" : ""}
          `}
        >
          <span
            onClick={() => handleTimeClick(time)}
            disabled={isBookedTime(time, datesFromDatabase, selectedDate)}
          >
            {time}
          </span>
        </button>
      ))}
      {start !== "" && end === "" && (
        <p className="mt-8">
          Start time selected: {start}
        </p>
      )}
      {start !== "" && end !== "" && (
        <>
          <p className="mt-8">
            Start time selected: {start}
          </p>
          <p className="mt-8">
            End time selected: {end}
          </p>
        </>
      )}
    </div>
  );
}

// Kilde: https://www.youtube.com/watch?v=5jRrVqRWqsM
// * Calendar component
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
    <div className="component">

      <div className="calendar-time-container">

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
          {/* <p>{selectedDate.format("DD-MM-YYYY")}</p> */}
          <p className="mt-10 dateSelected flex justify-center">
            Date selected: {selectedDate.format("D MMMM YYYY")}
          </p>
        </div>
        <CalendarTime selectedDate={selectedDate} />
        
      </div>
      <Button className="continueBtn" type="submit" title="Continue" />

    </div>
  );
}   
import React from "react";

function Calendar() {
  return (
    <div className="calendar-container">

      <div className="calendar-header">
        <button className="leftBtn"></button>
        <h2 className="monthText">Februar 2023</h2>
        <button className="rightBtn"></button>
      </div>

      <div className="calendarTable">
        <ul className="calendarHeader">
          <li>Mon</li>
          <li>Thues</li>
          <li>Wed</li>
          <li>Thurs</li>
          <li>Fri</li>
          <li>Sat</li>
          <li>Sun</li>
        </ul>

        <ol className="calendarCells">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </div>
      
    </div>
  )
}

export default Calendar;

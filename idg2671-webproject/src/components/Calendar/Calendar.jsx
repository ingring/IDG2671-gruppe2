import React from "react";

function Calendar() {
  return (
    <div className="calendar-container bg-white flex flex-col max-w-lg p-10 rounded-md">
      <p className="flex justify-start mb-5">Velg dato</p>

      <div className="calendar-header flex flex-row justify-between mb-2">
        <button className="leftBtn my-6 w-3">
          <svg viewBox="0 0 63 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.75 33.3349L54.5 5.18912C56.1667 4.22686 58.25 5.4297 58.25 7.35418V63.6458C58.25 65.5703 56.1666 66.7731 54.5 65.8109L5.75002 37.6651C4.08333 36.7028 4.08335 34.2972 5.75 33.3349Z" stroke="#636363" stroke-width="9" />
          </svg>
        </button>
        <h2 className="monthText my-6 font-bold">Februar 2023</h2>
        <button className="leftBtn my-6 w-3 rotate-180">
          <svg viewBox="0 0 63 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.75 33.3349L54.5 5.18912C56.1667 4.22686 58.25 5.4297 58.25 7.35418V63.6458C58.25 65.5703 56.1666 66.7731 54.5 65.8109L5.75002 37.6651C4.08333 36.7028 4.08335 34.2972 5.75 33.3349Z" stroke="#636363" stroke-width="9" />
          </svg>
        </button>
      </div>

      <div className="calendarTable">
        <div className="calendarHeader mb-2">
          <ul className="flex flex-row justify-evenly ">
            <li className="w-12">Mon</li>
            <li className="w-12">Thues</li>
            <li className="w-12">Wed</li>
            <li className="w-12">Thurs</li>
            <li className="w-12">Fri</li>
            <li className="w-12">Sat</li>
            <li className="w-12">Sun</li>
          </ul>
        </div>

        <div className="calendarCells">

          <ol className="flex flex-row justify-evenly mb-1">
            <li><button className="w-14 p-2 bg-green">1</button></li>
            <li><button className="w-14 p-2 bg-green">2</button></li>
            <li><button className="w-14 p-2 bg-green">3</button></li>
            <li><button className="w-14 p-2 bg-green">4</button></li>
            <li><button className="w-14 p-2 bg-green">5</button></li>
            <li><button className="w-14 p-2 bg-green">6</button></li>
            <li><button className="w-14 p-2 bg-green">7</button></li>
          </ol>
          <ol className="flex flex-row justify-evenly mb-1">
            <li><button className="w-14 p-2 bg-green">1</button></li>
            <li><button className="w-14 p-2 bg-green">2</button></li>
            <li><button className="w-14 p-2 bg-green">3</button></li>
            <li><button className="w-14 p-2 bg-green">4</button></li>
            <li><button className="w-14 p-2 bg-green">5</button></li>
            <li><button className="w-14 p-2 bg-green">6</button></li>
            <li><button className="w-14 p-2 bg-green">7</button></li>
          </ol>
          <ol className="flex flex-row justify-evenly mb-1">
            <li><button className="w-14 p-2 bg-green">1</button></li>
            <li><button className="w-14 p-2 bg-green">2</button></li>
            <li><button className="w-14 p-2 bg-green">3</button></li>
            <li><button className="w-14 p-2 bg-green">4</button></li>
            <li><button className="w-14 p-2 bg-green">5</button></li>
            <li><button className="w-14 p-2 bg-green">6</button></li>
            <li><button className="w-14 p-2 bg-green">7</button></li>
          </ol>
          <ol className="flex flex-row justify-evenly mb-1">
            <li><button className="w-14 p-2 bg-green">1</button></li>
            <li><button className="w-14 p-2 bg-green">2</button></li>
            <li><button className="w-14 p-2 bg-green">3</button></li>
            <li><button className="w-14 p-2 bg-green">4</button></li>
            <li><button className="w-14 p-2 bg-green">5</button></li>
            <li><button className="w-14 p-2 bg-green">6</button></li>
            <li><button className="w-14 p-2 bg-green">7</button></li>
          </ol>
          <ol className="flex flex-row justify-evenly">
            <li><button className="w-14 p-2 bg-green">1</button></li>
            <li><button className="w-14 p-2 bg-green">2</button></li>
            <li><button className="w-14 p-2 bg-green">3</button></li>
            <li><button className="w-14 p-2 bg-green">4</button></li>
            <li><button className="w-14 p-2 bg-green">5</button></li>
            <li><button className="w-14 p-2 bg-green">6</button></li>
            <li><button className="w-14 p-2 bg-green">7</button></li>
          </ol>
        </div>

      </div>
    </div>
  )
}

export default Calendar;

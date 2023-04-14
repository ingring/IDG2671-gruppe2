import React from "react";

// Creating the calendar header
//! Calendar wont change when switching between months
export default function CalendarHeader({ value, setValue }) {

    function currMonthDate() {
        return value.format("MMMM")
    }

    function currYear() {
        return value.format("YYYY")
    }

    function prevMonth() {
        return value.clone().subtract(1, "month")
    }

    function nextMonth() {
        return value.clone().add(1, "month")
    }

    function thisMonth() {
        return value.isSame(new Date(), "month")
    }
    return (
        <div className="calendarHeader">

            <div className="previous" onClick={() => !thisMonth() && setValue(prevMonth())}>
                <button>
                    <svg width="0.8rem" viewBox="0 0 63 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 33.3349L54.5 5.18912C56.1667 4.22686 58.25 5.4297 58.25 7.35418V63.6458C58.25 65.5703 56.1666 66.7731 54.5 65.8109L5.75002 37.6651C4.08333 36.7028 4.08335 34.2972 5.75 33.3349Z" stroke="#636363" strokeWidth="9" />
                    </svg>
                </button>
            </div>

            <div className="current">{currMonthDate()} {currYear()}</div>

            <div className="next" onClick={() => setValue(nextMonth())}>
                <button>
                    <svg width="0.8rem" viewBox="0 0 63 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 33.3349L54.5 5.18912C56.1667 4.22686 58.25 5.4297 58.25 7.35418V63.6458C58.25 65.5703 56.1666 66.7731 54.5 65.8109L5.75002 37.6651C4.08333 36.7028 4.08335 34.2972 5.75 33.3349Z" stroke="#636363" strokeWidth="9" />
                    </svg>
                </button>
            </div>

        </div>
    )
}
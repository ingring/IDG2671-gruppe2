import { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';

// https://blog.logrocket.com/react-calendar-tutorial-build-customize-calendar/
function CalendarComponent() {
    //Created a state to store a date and passed the current date as its initial value using JavaScript’s Date object.
    const [date, setDate] = useState(new Date());

    return (
        <div className='Calendar'>
          <h1 className='text-center'>React Calendar with Range</h1>
          <div className='calendar-container'>
            <Calendar
              onChange={setDate}
              value={date}
              selectRange={true}
            />
          </div>
          {date.length > 0 ? (
            <p className='text-center'>
              <span className='bold'>Start:</span>{' '}
              {date[0].toDateString()}
              &nbsp;|&nbsp;
              <span className='bold'>End:</span> {date[1].toDateString()}
            </p>
          ) : (
            <p className='text-center'>
              <span className='bold'>Default selected date:</span>{' '}
              {date.toDateString()}
            </p>
          )}
        </div>
      );
    }

export default CalendarComponent;

import React, { useState } from 'react';
import moment from 'moment';
import Calendar from '../components/Calendar/Calendar';

function BookingCalendarPage() {
    const [value, setValue] = useState(moment());
    return (
            <div className="bg-grey-lighter min-h-screen w-full">
                <Calendar value={value} onChange={setValue} />
            </div >
    );
}

export default BookingCalendarPage;
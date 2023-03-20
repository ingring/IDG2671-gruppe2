import React, {useState} from 'react';
import moment from "moment";
import Calendar from '../components/Calendar/Calendar';


function BookingPage() {
    const [value, setValue] = useState(moment());
    return (
        <>
            <div className="bg-grey-lighter min-h-screen">
                <h1 className="pt-4">Dette er booking pagen!</h1>
                <Calendar value={value} onChange={setValue} />
            </div>
        </>
    );
}

export default BookingPage;
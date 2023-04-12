import React, {useState} from 'react';
import moment from 'moment';
import Calendar from '../components/Calendar/Calendar';
import { divide } from 'lodash';

function BookingCalendarPage() {
    const [value, setValue] = useState(moment());
    return ( 
        <div className="bg-grey-lighter min-h-screen"> 
            <Calendar value={value} onChange={setValue}/>
        </div>
    );
}

export default BookingCalendarPage;
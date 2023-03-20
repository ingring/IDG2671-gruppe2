import BookTool from '../components/BookTool/BookTool';

let jsonData = {
    "tool":"Laserkutter",
    "date":"23/03/2023",
    "time":"13:00 - 16:00",
    "duration":"3h"
} 

function BookingPage() {
    return (
        <>
            <div className="bg-grey-lighter min-h-screen">
                <h1 className="pt-4">Dette er booking pagen!</h1>
                <BookTool 
                    tool={jsonData["tool"]}
                    date={jsonData["date"]}
                    time={jsonData["time"]}
                    duration={jsonData["duration"]}
                />
            </div>
        </>
    );
}

export default BookingPage;
import BookTool from '../components/BookTool/BookTool';

let jsonData = {
    "tool": "Laserkutter",
    "date": "23/03/2023",
    "time": "13:00 - 16:00",
    "duration": "3h"
}

function BookingPage() {
    return (
        <div className="bg-grey-lighter min-h-screen p-20">
            <h1 className="text-3xl pb-20">Book tool</h1>
            <div className="flex justify-center items-center ">
                <BookTool
                    tool={jsonData["tool"]}
                    date={jsonData["date"]}
                    time={jsonData["time"]}
                    duration={jsonData["duration"]}
                />
            </div>
        </div>
    );
}

export default BookingPage;

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
            <div className="flex flex-col justify-center items-center ">
                <h1 className="text-3xl pb-20">Book tool</h1>
                <div className="w-2/5 pb-20">
                    <BookTool
                        tool={jsonData["tool"]}
                        date={jsonData["date"]}
                        time={jsonData["time"]}
                        duration={jsonData["duration"]}
                    />
                </div>
            </div>
        </div>
    );
}

export default BookingPage;

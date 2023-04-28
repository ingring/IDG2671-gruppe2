import BookTool from '../components/BookTool/BookTool';

let jsonData = {
    "tool": "Laserkutter",
    "date": "23/03/2023",
    "time": "13:00 - 16:00",
    "duration": "3h"
}

function BookingPage() {
    return (
        <div className="bg-grey-lighter min-h-screen">
            <div className="flex flex-col justify-center items-center ">
                <div className="bg-blue-lighter mb-20 flex flex-col items-center w-full">
                    <div className="w-3/5 py-14 flex justify-left flex-col">
                        <h1 className="text-3xl pb-12">Booking</h1>
                        <p className="pb-6 md:w-3/5">Please check that all information is correct, then you may add a description. When everything looks okay, you can book your tool.</p>
                    </div>
                </div>
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

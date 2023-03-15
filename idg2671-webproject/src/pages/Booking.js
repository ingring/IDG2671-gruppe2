import Calendar from '../components/Calendar/Calendar';

function BookingPage() {
    return (
        <>
            <div className="bg-grey-lighter min-h-screen">
                <h1 className="pt-4">Dette er booking pagen!</h1>
                <Calendar />
            </div>
        </>
    );
}

export default BookingPage;
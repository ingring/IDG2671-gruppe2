import List from "./List";
import ListElement from "./ListElement";

import React, { useState, useEffect, useContext } from "react";
import useAxiosPrivate from "../../axios/useAxiosPrivate"
import AuthContext from "../../context/AuthProvider";

const userURL = 'api/users/';


function ListElementMyBookings({ tool, date, time }) {
    return (
        <div className="flex justify-between">
            <a href='./tools/id' className="flex justify-between w-5/6 items-center">
                <span className="w-1/4 md:w-2/4 px-4 ">{tool}</span>
                <span className="w-3/4 px-4">{date}</span>
                <span className="w-2/4 px-4">{time}</span>
            </a>
            {/* Deletes the booking */}
            <button>
                <svg width="22" height="22" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 0C6.2685 0 0 6.2685 0 14C0 21.7315 6.2685 28 14 28C21.7315 28 28 21.7315 28 14C28 6.2685 21.7315 0 14 0ZM15.6497 14C15.6497 14 19.3118 17.6622 19.4915 17.8418C19.9477 18.298 19.9477 19.0365 19.4915 19.4915C19.0353 19.9477 18.2968 19.9477 17.8418 19.4915C17.6622 19.313 14 15.6497 14 15.6497C14 15.6497 10.3378 19.3118 10.1582 19.4915C9.702 19.9477 8.9635 19.9477 8.5085 19.4915C8.05233 19.0353 8.05233 18.2968 8.5085 17.8418C8.687 17.6622 12.3503 14 12.3503 14C12.3503 14 8.68817 10.3378 8.5085 10.1582C8.05233 9.702 8.05233 8.9635 8.5085 8.5085C8.96467 8.05233 9.70317 8.05233 10.1582 8.5085C10.3378 8.687 14 12.3503 14 12.3503C14 12.3503 17.6622 8.68817 17.8418 8.5085C18.298 8.05233 19.0365 8.05233 19.4915 8.5085C19.9477 8.96467 19.9477 9.70317 19.4915 10.1582C19.313 10.3378 15.6497 14 15.6497 14Z" fill="#FFAFAF" />
                </svg>
            </button>
        </div>
    )
}

function ListMyBookings() {
    const [bookings, setBookings] = useState([]);
    const axiosPrivate = useAxiosPrivate();
    const { auth } = useContext(AuthContext);
    console.log(auth)
    const fullURL = userURL + auth.username;
    console.log(fullURL);
  
    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()
        const getUser = async () => {
            try {
                const response = await axiosPrivate.get(fullURL, {
                    signal: controller.signal
                })
                console.log('res: ',response);
                console.log('bookins: ', response.data.bookings)
                isMounted && setBookings(response.data.bookings)
            }catch(err){
                console.log(err)
            }
        }

        getUser()

        if (!bookings) {
            return <p>Loading...</p>;
        }

        return () => {
            isMounted = false
            controller.abort()
        }
    }, []);

    // const formattedDate = bookings.date.format("D MMMM YYYY");

return (
    <List>
      {bookings ? (
        bookings.map((booking) => (
          <ListElement>
            <ListElementMyBookings
              tool={booking.tool}
              date={booking.date}
              time={booking.start_time}
            />
          </ListElement>
        ))
      ) : (
        <p>No current bookings</p>
      )}
    </List>
  );
}

export default ListMyBookings;
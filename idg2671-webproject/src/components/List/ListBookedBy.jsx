import React, { useState, useEffect, useContext } from "react";
import "flowbite";
import List from "./List";
import ListElement from "./ListElement";
import AuthContext from "../../context/AuthProvider";
import useAxiosPrivate from "../../axios/useAxiosPrivate";

function ListElementBookedBy({tool, date, time, username}) {
    return (
        <a href='./tools/id' className="flex">
            <span className="w-1/4 font-semibold px-4">{tool}</span>
            <span className="w-1/4 px-4">{date}</span>
            <span className="w-1/4 px-4">{time}</span>
            <span className="w-1/4 px-4">{username}</span>
        </a>
    )
}

function ListBookedBy() {

    const [user, setUser] = useState('')
    const [data, setData] = useState([]);
  
    const axiosPrivate = useAxiosPrivate();
  
    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()
        const getUser = async () => {
            try {
                const response = await axiosPrivate.get(`api/users`, {
                    signal: controller.signal
                })
                console.log('bookings: ', data)
                console.log('username: ', user)
                isMounted && setData(response.data.bookings) && setUser(response.data.username)
            }catch(err){
                console.log(err)
            }
        }

        getUser()

        // if (!data) {
        //     return <p>Loading...</p>;
        // }

        return () => {
            isMounted = false
            controller.abort()
        }
    }, [data, user, axiosPrivate]);

    return (         
        <List>
        {data ? (
        data.map((booking) => (
            <ListElement>
            <ListElementBookedBy
                tool={booking.name}
                date={booking.date}
                time={booking.start_time}
                username={user}
            />
            </ListElement>
        ))
        ) : (
        <p>No current bookings</p>
        )}
        </List>
    )
}

export default ListBookedBy
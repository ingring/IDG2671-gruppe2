import React, { useState, useEffect, useContext } from "react";
import "flowbite";
import List from "./List";
import ListElement from "./ListElement";
import AuthContext from "../../context/AuthProvider";
import useAxiosPrivate from "../../axios/useAxiosPrivate";

function ListElementBookedBy({tool, date, time, user}) {
    return (
        <a href='./tools/id' className="flex">
            <span className="w-1/4 font-semibold px-4">{tool}</span>
            <span className="w-1/4 px-4">{date}</span>
            <span className="w-1/4 px-4">{time}</span>
            <span className="w-1/4 px-4">{user}</span>
        </a>
    )
}

function ListBookedBy() {

    const [username, setUsername] = useState('')
    const [data, setData] = useState([]);
  
    const axiosPrivate = useAxiosPrivate();
  
    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()
        const getUser = async () => {
            try {
                const response = await axiosPrivate.get(`api/bookable_tools`, {
                    signal: controller.signal
                })
                isMounted && setData(response.data.bookings) && setUsername(response.data.username)
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
    }, [data, username, axiosPrivate]);

    return (         
        <List>
        {data ? (
        data.map((booking) => (
            <ListElement>
            <ListElementBookedBy
                username={username}
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
    )
}

export default ListBookedBy
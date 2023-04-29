import React, { useState, useEffect } from "react";
import "flowbite";
import List from "./List";
import ListElement from "./ListElement";
import useAxiosPrivate from "../../axios/useAxiosPrivate";

function ListElementBookedBy({ tool, date, time, username }) {
  return (
    <a href={`./tools/${tool}`} className="flex">
      <span className="w-1/4 font-semibold px-4">{tool}</span>
      <span className="w-1/4 px-4">{date}</span>
      <span className="w-1/4 px-4">{time}</span>
      <span className="w-1/4 px-4">{username}</span>
    </a>
  );
}

function ListBookedBy() {
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);

  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await axiosPrivate.get(`api/users`, {
          signal: controller.signal,
        });
        setData(response.data.bookings);
        setUser(response.data.username);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [axiosPrivate]);

  return (
    <List>
      {data.length ? (
        data.map((booking) => (
          <ListElement key={booking._id}>
            <ListElementBookedBy
              tool={booking.tool}
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
  );
}

export default ListBookedBy;
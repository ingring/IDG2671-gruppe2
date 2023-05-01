import React, { useState, useEffect } from "react";
import "flowbite";
import List from "./List";
import ListElement from "./ListElement";
import useAxiosPrivate from "../../axios/useAxiosPrivate";
import { noise } from "@cloudinary/url-gen/actions/effect";

function ListElementRequestedTool({ name, date, username }) {
    return (
        <a className="flex">
            <span className="w-1/4 md:w-2/4 font-semibold px-4">{name}</span>
            <span className="w-1/4 md:w-2/4 px-4">{date}</span>
            <span className="w-1/4 md:w-2/4 px-4">{username}</span>
        </a>
    );
}

function ListRequestedTool() {
    const [data, setData] = useState([]);

    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const fetchData = async () => {
            try {
                const response = await axiosPrivate.get(`api/requests`);
                console.log(data);
                setData(response.data.reduce((requests, user) => {
                    return requests.concat(user.requests.map(booking => {
                        return {
                            ...booking,
                            username: user.username
                        };
                    }));
                }, []));
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
            controller.abort();
        };
    }, []);

    return (
        <List>
            {data.length ? (
                data.map((request) => (
                    <ListElement key={request._id}>
                        <ListElementRequestedTool
                            name={request.name}
                            date={request.date}
                            username={request.username}
                        />
                    </ListElement>
                ))
            ) : (
                <p>No current requests</p>
            )}
        </List>
    );
}

export default ListRequestedTool;
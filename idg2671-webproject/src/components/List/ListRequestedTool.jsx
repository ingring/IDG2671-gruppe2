import React, { useState, useEffect } from "react";
import "flowbite";
import List from "./List";
import ListElement from "./ListElement";
import useAxiosPrivate from "../../axios/useAxiosPrivate"

function ListElementRequestedTool({ name, date, username }) {
    return (
        <div className="flex justify-between">
            <span className="w-1/4 md:w-2/4 px-4">{name}</span>
            <span className="w-1/4 md:w-2/4 px-4">{date}</span>
            <span className="w-1/4 md:w-2/4 px-4">{username}</span>
            <button>
                <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0C5.82075 0 0 5.82075 0 13C0 20.1793 5.82075 26 13 26C20.1793 26 26 20.1793 26 13C26 5.82075 20.1793 0 13 0ZM14.0833 19.5H11.9167V11.9167H14.0833V19.5ZM13 9.20833C12.103 9.20833 11.375 8.48033 11.375 7.58333C11.375 6.68633 12.103 5.95833 13 5.95833C13.897 5.95833 14.625 6.68633 14.625 7.58333C14.625 8.48033 13.897 9.20833 13 9.20833Z" fill="#204F99"/>
                </svg>
            </button>
        </div>
    );
}

function ListRequestedTool() {
    const [data, setData] = useState([]);
    const [date, setDate] = useState("");
    const axiosPrivate = useAxiosPrivate();
    const [formattedDates, setFormattedDates] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axiosPrivate.get('api/requests')

                // If the response status is ok, parse the response body and format the dates
                const result = response.data.map((element) => ({
                    ...element,
                    dateCreated: new Date(element.dateCreated).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'
                    }).replace(/\//g, '-')
                }));

                setData(result);

                return result;


            } catch (error) {
                // If an error occurs during the API request, log the error and return null
                console.error(error);
                return null;
            }
        }
        fetchData();


    }, []); // run only once, on mount

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <List>
            {data.length ? (
                data.map((request, index) => (
                    <ListElement key={index}>
                        <ListElementRequestedTool
                            name={request.name}
                            date={request.dateCreated}
                            username={request.user?.username}
                            request={request}
                        />
                    </ListElement>
                ))
            ) : (
                <p>No current requests</p>
            )
            }
        </List >
    );
}

export default ListRequestedTool;
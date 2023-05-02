import React, { useState, useEffect} from "react";
import List from "./List";
import ListElement from "./ListElement";
import useAxiosPrivate from "../../axios/useAxiosPrivate";
import {Link} from "react-router-dom";

function ListElementUsers({user, username, id, study, year}) {
    const url = `./admin/users/${id}`

    const axiosPrivate = useAxiosPrivate();

    async function handleDelete() {
        try {
          const response = await axiosPrivate.delete(`api/users/${username}`); //mangler delete route
          console.log(response.data);
          return response.data;
        } catch (error) {
          console.error(error);
        }
    } 

    return (
        <div className="flex justify-between">
            <a href={url} className="flex w-3/4">
                <span className="w-2/4 min-w-fit">{user}</span>
                <span className="w-1/4 min-w-fit">{study} {year}</span>
            </a>
            <div className="flex">
                {/* change the booking - PUT? */}
                <Link className="w-2/4 mr-4" to={{pathname:`./modifyUser/${username}` }}>
                    <svg width="20" height="25" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.8281 3.69226C22.3164 3.69226 21.8046 3.91777 21.4141 4.36834L19 7.1538L24 12.923L26.4141 10.1376C27.1951 9.23642 27.1951 7.77551 26.4141 6.87435L24.2422 4.36834C23.8517 3.91777 23.3399 3.69226 22.8281 3.69226ZM17 9.46149L5.25977 23.0079C5.25977 23.0079 6.17753 22.913 6.51953 23.3076C6.86153 23.7023 6.58 26.2846 7 26.7692C7.42 27.2538 9.64389 26.9127 9.96289 27.2808C10.2819 27.6488 10.2598 28.7771 10.2598 28.7771L22 15.2307L17 9.46149ZM4 26.7692L3.05664 29.8521C3.01956 29.9738 3.00041 30.1018 3 30.2307C3 30.5367 3.10536 30.8302 3.29289 31.0466C3.48043 31.263 3.73478 31.3846 4 31.3846C4.11177 31.3841 4.22268 31.362 4.32812 31.3192C4.33139 31.3177 4.33464 31.3162 4.33789 31.3147L4.36328 31.3057C4.36524 31.3042 4.36719 31.3027 4.36914 31.3012L7 30.2307L5.5 28.5L4 26.7692Z" fill="#102442"/>
                    </svg>
                </Link>

                {/* Deletes the booking */}
                <button className="w-2/4" onClick={handleDelete}>
                    <svg width="22" height="22" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 0C6.2685 0 0 6.2685 0 14C0 21.7315 6.2685 28 14 28C21.7315 28 28 21.7315 28 14C28 6.2685 21.7315 0 14 0ZM15.6497 14C15.6497 14 19.3118 17.6622 19.4915 17.8418C19.9477 18.298 19.9477 19.0365 19.4915 19.4915C19.0353 19.9477 18.2968 19.9477 17.8418 19.4915C17.6622 19.313 14 15.6497 14 15.6497C14 15.6497 10.3378 19.3118 10.1582 19.4915C9.702 19.9477 8.9635 19.9477 8.5085 19.4915C8.05233 19.0353 8.05233 18.2968 8.5085 17.8418C8.687 17.6622 12.3503 14 12.3503 14C12.3503 14 8.68817 10.3378 8.5085 10.1582C8.05233 9.702 8.05233 8.9635 8.5085 8.5085C8.96467 8.05233 9.70317 8.05233 10.1582 8.5085C10.3378 8.687 14 12.3503 14 12.3503C14 12.3503 17.6622 8.68817 17.8418 8.5085C18.298 8.05233 19.0365 8.05233 19.4915 8.5085C19.9477 8.96467 19.9477 9.70317 19.4915 10.1582C19.313 10.3378 15.6497 14 15.6497 14Z" fill="#FFAFAF"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

function ListUsers() {
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
                isMounted && setData(response.data)
            }catch(err){
                console.log(err)
            }
        }

        getUser()
        if (!data) {
            return <p>Loading...</p>;
        }
        return () => {
            isMounted = false
            controller.abort()
        }
    }, []);
    return (
        <List>
            {data.map((user) => <ListElement> <ListElementUsers user={user.first_name + ' ' + user.last_name} id={user._id} study={user.field_of_study} year={user.start_year} username={user.username} /> </ListElement>)}
        </List> 
    )
}

export default ListUsers;
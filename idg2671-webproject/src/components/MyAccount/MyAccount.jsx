import React, { useState, useEffect, useContext } from "react";
import { getAPI } from "../../helpers/getAPI";
import AuthContext from "../../context/AuthProvider";

export default function MyAccount() {
    const { user } = useContext(AuthContext);
    const username = user.username

    const [data, setData] = useState(null);
  
    useEffect(() => {
        async function fetchData() {
            const url = `users/${username}`;
            const response = await getAPI(url);
            setData(response);
        }
  
        fetchData();
    }, [username]); // run only once, on mount
  
    if (!data) {
        return <p>Loading...</p>;
    }
    return (
        <section className="flex items-center justify-center bg-grey-light rounded-2xl shadow-md px-14 py-16 max-w-prose">
            <dl>
                <div className="flex-col pt-3 mb-6">
                    <dt className="mb-1 md:text-lg font-semibold text-left">Name</dt>
                    <dd className="text-lg text-left">{data.first_name} {data.last_name}</dd>
                </div>
                <div className="flex-col pt-3 mb-6">
                    <dt className="mb-1 md:text-lg font-semibold text-left">Username</dt>
                    <dd className="text-lg text-left">{data.username}</dd>
                </div>
                <div className="flex-col pt-3 mb-6">
                    <dt className="mb-1 md:text-lg font-semibold text-left">Email</dt>
                    <dd className="text-lg text-left">{data.email}</dd>
                </div>
                <div className="flex-col pt-3 mb-6">
                    <dt className="mb-1 md:text-lg font-semibold text-left">Study</dt>
                    <dd className="text-lg text-left">Web development</dd>
                </div>
                <div className="flex-col pt-3">
                    <dt className="mb-1 md:text-lg font-semibold text-left">Department</dt>
                    <dd className="text-lg text-left">Institute for design</dd>
                </div>
            </dl>
        </section>
    )
}
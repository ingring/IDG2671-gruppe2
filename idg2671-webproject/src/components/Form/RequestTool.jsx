import React, { useState, useEffect, useContext } from "react";
import InputButton from '../Button/InputButton';

import AuthContext from "../../context/AuthProvider";
import useAxiosPrivate from "../../axios/useAxiosPrivate";

export default function RequestTool(){
    const { auth } = useContext(AuthContext);
    const username = auth.username

    const [data, setData] = useState([]);
  
    const axiosPrivate = useAxiosPrivate();
  
    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()
        const getUser = async () => {
            try {
                const response = await axiosPrivate.post(`api/tool`, {
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
    }, [data, username, axiosPrivate]);
    return(
        <div className="flex items-center justify-center w-full">
            <form className="flex justify-start flex-col pb-6 w-3/5 md:w-1/5 lg:w-1/6">
                <div className="pb-6">
                    <label for="toolname" className="block mb-2 text-left">Name of tool</label>
                    <input type="text" name="toolname" id="toolname" className="text-left border-grey-mediumLight p-2 h-8 rounded-md w-full" required></input>
                </div>
                <div className="pb-6">
                    <label for="description" className="block mb-2 text-left">Description</label>
                    <input type="text" name="description" id="description" placeholder="Usage..." className="text-left p-2 border-grey-mediumLight rounded-md w-full pb-20" required></input>
                </div>
                <InputButton value="Request tool" />
            </form>
        </div>
    )
}
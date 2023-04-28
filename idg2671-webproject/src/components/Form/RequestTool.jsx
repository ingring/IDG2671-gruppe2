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
        <section>
        <div className="flex items-center justify-center ">
            <div className="w-full sm:max-w-md">
                <div className="p-6 md:space-y-6 sm:p-8">
                    <form className="md:space-y-6 flex justify-start flex-col pb-6" action="#">
                        <div>
                            <label for="toolname" className="block mb-2 text-left lg:text-lg">Name of tool</label>
                            <input type="text" name="toolname" id="toolname" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full dark:bg-grey-lighter" required=""></input>
                        </div>
                        <div className="pb-6">
                            <label for="description" className="block mb-2 text-left lg:text-lg">Description</label>
                            <input type="text" name="description" id="description" placeholder="Usage" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full dark:bg-grey-lighter h-28" required=""></input>
                        </div>
                        <InputButton value="Request tool" />
                    </form>
                </div>
            </div>
        </div>
      </section>
    )
}
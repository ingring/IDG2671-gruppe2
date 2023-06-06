// Inspired youtube video by Dave Gray 
    // video: https://www.youtube.com/watch?v=oUZjO00NkhY&t=562s
    // video: https://www.youtube.com/watch?v=27KeYk-5vJw
// and Full Stack exam group 3 (Trym and Ingrid)
import React, { useState, useContext } from "react"
import InputButton from '../Button/InputButton';
import AuthContext from "../../context/AuthProvider";
import axios from "../../axios/axios";
import { useNavigate } from 'react-router-dom';


import useRefreshToken from "../../hooks/useRefreshtoken";


const LOGIN_URL = 'api/users/login';

function Login() {
    const navigate = useNavigate();
    const refresh = useRefreshToken();
    const { setAuth, auth } = useContext(AuthContext);
  
    const [state, setState] = useState({ })
    const [errorMsg, setErrorMsg]  = useState('')
  
    const handleChange = (event) => {
      const { name, value } = event.target
      setState(prevState => ({ ...prevState, [name]: value}))
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault()
      try {
        const response = await axios.post(LOGIN_URL,{
            username: state.username,
            password: state.password
        },  {
            headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
        }
        )
        const accesstoken = response?.data?.accesstoken;
        //setUser(state.username)
        setAuth({accesstoken:accesstoken})
        if(state.username)setAuth({username: state.username})
        //setAccesstoken(accesstoken)
        console.log('User: ', auth.username);
        console.log('token: ', auth.accesstoken);
        if(accesstoken) navigate('/');
      } catch (err) {
        console.log(err.response)
        setErrorMsg(err.response?.data || 'An error occurred. Please try again later.')
      }

    }


    return (
        <>
        <div className="flex flex-col items-center justify-center">
            <div className="w-full">

                    <form className="md:space-y-6 flex justify-start flex-col pb-3 w-4/4" action="#" onSubmit={handleSubmit}>
                    <div className="mb-6 md:mb-0">
                            <label for="username" className="block mb-2 text-left">Username</label>
                            <input type="username" name="username" id="username" className="text-left border border-grey-mediumLight p-2 h-9 rounded-md w-full" required="" onChange={handleChange}></input>
                        </div>
                        <div className="mb-6 md:mb-6">
                            <label for="password" className="block mb-2 text-left">Password</label>
                            <input type="password" name="password" id="password" className="text-left border border-grey-mediumLight p-2 h-9 rounded-md w-full" required="" onChange={handleChange}></input>
                        </div>
                        <InputButton value="Submit" />
                        {errorMsg && <div class="bg-red-100 border mt-5 border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert"><p className="block sm:inline">{errorMsg}</p></div>}
                    </form>
                </div>
            </div>

        {/* <div className="flex items-center justify-center w-2/6">
            <div className="w-full sm:max-w-md">
                <div className="p-6 md:space-y-6 sm:p-8">
                    <form className="md:space-y-6 flex justify-start flex-col pb-6" action="#" onSubmit={handleSubmit}>
                        <div>
                            <label for="email" className="block mb-2 text-left lg:text-lg">Email</label>
                            <input type="email" name="email" id="email" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full dark:bg-grey-lighter" placeholder="name@stud.ntnu.no" required=""></input>
                        </div>
                        <div className="pb-6">
                            <label for="password" className="block mb-2 text-left lg:text-lg">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full dark:bg-grey-lighter" required=""></input>
                        </div>
                        <InputButton value="Submit" />
                    </form>
                </div>
            </div>
        </div> */}
        </>
    )
}

export default Login;

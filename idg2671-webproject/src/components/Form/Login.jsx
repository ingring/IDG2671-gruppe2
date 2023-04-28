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
    const { setAuth, auth, user, setUser, accesstoken, setAccesstoken } = useContext(AuthContext);
  
    const [state, setState] = useState({ })
  
    const handleChange = (event) => {
        console.log('HS')
      const { name, value } = event.target
      setState(prevState => ({ ...prevState, [name]: value}))
      console.log(state);
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
        console.log('response: ', response)
        console.log('username:', state.username);
        console.log(response)
        const accesstoken = response?.data?.accesstoken;
        //setUser(state.username)
        setAuth({accesstoken:accesstoken})
        if(state.username)setAuth({username: state.username})
        //setAccesstoken(accesstoken)
        console.log('User: ', auth.username);
        console.log('token: ', auth.accesstoken);
        if(accesstoken) navigate('/');
      } catch (err) {
        console.log(err)
      }

    }


    return (
        <>
        <div className="flex items-center justify-center w-2/6">
            <div className="w-full sm:max-w-md">
                <div className="p-6 md:space-y-6 sm:p-8">
                    <form className="md:space-y-6 flex justify-start flex-col pb-6" action="#" onSubmit={handleSubmit}>
                        <div>
                            <label for="username" className="block mb-2 text-left lg:text-lg">Username</label>
                            <input type="username" name="username" id="username" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full dark:bg-grey-lighter" placeholder="username" required="" onChange={handleChange}></input>
                        </div>
                        <div className="pb-6">
                            <label for="password" className="block mb-2 text-left lg:text-lg">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full dark:bg-grey-lighter" required="" onChange={handleChange}></input>
                        </div>
                        <InputButton value="Submit" />
                    </form>
                </div>
                <button onClick={() => refresh()}>refresh</button>
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

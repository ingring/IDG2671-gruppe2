import React, { useState, useContext } from "react"
import InputButton from '../Button/InputButton';
import AuthContext from "../../context/AuthProvider";
import axios from "../../axios/axios";

import useRefreshToken from "../../hooks/useRefreshtoken";


const LOGIN_URL = 'api/users/login';

function Login() {
    const refresh = useRefreshToken();
    const { useAuth, setAuth } = useContext(AuthContext);
  
    const [state, setState] = useState({
      username: '',
      password: ''
    })
  
    const handleChange = (event) => {
      const { name, value } = event.target
      setState(prevState => ({ ...prevState, [name]: value}))
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault()
  
      try {
          console.log(state.username,state.password)
        const response = await axios.post(LOGIN_URL,{
            username: 'lisamy',
            password: 'password'
        }
        )
        console.log('response: ', response)
        console.log(response?.data?.accesstoken)
        const accesstoken = response?.data?.accesstoken;
        setAuth({username: state.username, accesstoken:accesstoken})
        console.log('Auth: ', useAuth)
  
      } catch (err) {
        console.log(err)
      }
  
      setState({
          username: '',
          password: ''
      })
    }


    return (
        <>
        <div className="flex items-center justify-center w-2/6">
            <div className="w-full sm:max-w-md">
                <div className="p-6 md:space-y-6 sm:p-8">
                    <form className="md:space-y-6 flex justify-start flex-col pb-6" action="#" onSubmit={handleSubmit}>
                        <div>
                            <label for="email" className="block mb-2 text-left lg:text-lg">Email</label>
                            <input type="username" name="email" id="email" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full dark:bg-grey-lighter" placeholder="name@stud.ntnu.no" required="" onChange={handleChange}></input>
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

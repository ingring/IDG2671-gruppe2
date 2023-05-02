import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../axios/useAxiosPrivate";
import InputButton from '../Button/InputButton';
import { useParams } from "react-router-dom";

export default function CreateUser() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        field_of_study: "",
        start_year: ""
      });
    const [errorMsg, setErrorMsg]  = useState('')
    const [successMsg, setSuccessMsg]  = useState('')

      const axiosPrivate = useAxiosPrivate();

      let {id} = useParams() //username

      useEffect(() => {
        async function getUser() {
            try {
                const response = await axiosPrivate.get(`api/users/${id}`)
                console.log(response)
                const data = response.data
                setFormData({
                    firstname: data.first_name,
                    lastname: data.last_name,
                    username: data.username,
                    email: data.email,
                    field_of_study: data.field_of_study,
                    start_year: data.start_year
                })
            } catch (error) {
                // If an error occurs during the API request, log the error and return null
                console.error(error);
            } 
        }
        getUser()
      },[]);

      const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('inni submit: ', formData);
        try {
          console.log('test')
          const response = await axiosPrivate.put(`api/users/${formData.username}`, //usikker på routen
          {
            first_name: formData.firstname,
            last_name: formData.lastname,
            username: formData.username, //mulig det ikke er mulig å endre username - idk
            email: formData.email,
            field_of_study: formData.field_of_study,
            start_year: formData.start_year,
            password: 'password'
        });
          console.log(response.data);
          setErrorMsg('')
          setSuccessMsg(`User created: ${formData.username}`);
          setFormData({
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            field_of_study: "",
            start_year: ""
          })
        } catch (err) {
          console.log('failed')
          setSuccessMsg('');
          setErrorMsg(err.response?.data || 'An error occurred. Please try again later.')
        }
      };
    
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
        console.log(formData)
      };

    return (
        <div className="flex items-center justify-center">
            <div className="w-full">
                <form className="md:space-y-6 flex justify-start flex-col pb-3" onSubmit={handleSubmit}>
                <div className="mb-6 md:mb-0">
                        <label for="firstname" className="block mb-2 text-left">First name</label>
                        <input type="text" name="firstname" id="firstname" className="text-left border-grey-mediumLight p-2 h-9 rounded-md w-full" 
                            value={formData.firstname} onChange={handleChange} required></input>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <label for="lastname" className="block mb-2 text-left">Last name</label>
                        <input type="text" name="lastname" id="lastname" 
                            className="text-left border-grey-mediumLight p-2 h-9 rounded-md w-full" 
                            value={formData.lastname} onChange={handleChange} required></input>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <label for="username" className="block mb-2 text-left">Username</label>
                        <input type="text" name="username" id="username" 
                            className="text-left border-grey-mediumLight p-2 h-9 rounded-md w-full" 
                            value={formData.username} onChange={handleChange} required></input>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <label for="email" className="block mb-2 text-left">Email</label>
                        <input type="text" name="email" id="email" 
                            className="text-left border-grey-mediumLight p-2 h-9 rounded-md w-full" 
                            value={formData.email} onChange={handleChange} required></input>
                    </div>
                    <div className="pb-14 md:pb-0">
                        <label for="field_of_study" className="block mb-2 text-left">Field of study</label>
                        <select type="text" name="field_of_study" id="field_of_study" 
                            className="text-left border-grey-mediumLight p-2 h-9 rounded-md w-full" 
                            defaultValue={formData.field_of_study} value={formData.field_of_study} onChange={handleChange} required>
                            <option value=""></option>
                            <option value="BWU">BWU</option>
                            <option value="BIXD">BIXD</option>
                            <option value="BMED">BMED</option>
                            <option value="ÅRSWEB">AARSWEB</option>
                            <option value="MIXD">MIXD</option>
                        </select>
                    </div>
                    <div className="mb-6 md:mb-6">
                        <label for="start_year" className="block mb-2 text-left">Start year</label>
                        <input type="text" name="start_year" id="start_year" 
                            className="text-left border-grey-mediumLight p-2 h-9 rounded-md w-full" 
                            value={formData.start_year} onChange={handleChange} required></input>
                    </div>
                    <InputButton value="Submit" />
                    {errorMsg && <div class="bg-red-100 border mt-5 border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert"><p className="block sm:inline">{errorMsg}</p></div>}
                    {successMsg && <div class="bg-green-100 border mt-5 border-green-400 text-green-700 px-4 py-3 rounded relative"><p className="block sm:inline">{successMsg}</p></div>}
                </form>
            </div>
        </div>
    )
}
import React, { useState } from "react";
import useAxiosPrivate from "../../axios/useAxiosPrivate";
import InputButton from '../Button/InputButton';

export default function CreateUser() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        field_of_study: "",
      });

      const axiosPrivate = useAxiosPrivate();
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await axiosPrivate.post(`api/users`, 
          {
            first_name: formData.firstname,
            last_name: formData.lastname,
            username: formData.username,
            email: formData.email,
            field_of_study: formData.field_of_study,
            start_year: '2023',
            password: 'password'
        });
          console.log(response.data);
        } catch (error) {
          console.error(error);
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
                <h1 className="text-xl md:text-2xl text-left mb-10">
                    Create / Modify user
                </h1>
                <p>console.log'jeg er lei'</p>
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
                    <div className="pb-14 md:pb-6">
                        <label for="field_of_study" className="block mb-2 text-left">Field of study</label>
                        <select type="text" name="field_of_study" id="field_of_study" 
                            className="text-left border-grey-mediumLight p-2 h-9 rounded-md w-full" 
                            value={formData.field_of_study} onChange={handleChange} required>
                            <option value=""></option>
                            <option value="BWU">BWU</option>
                            <option value="BIXD">BIXD</option>
                            <option value="BMED">BMED</option>
                            <option value="AARSWEB">AARSWEB</option>
                            <option value="MIXD">MIXD</option>
                        </select>
                    </div>
                    <InputButton value="Submit" />
                </form>
            </div>
        </div>
    )
}
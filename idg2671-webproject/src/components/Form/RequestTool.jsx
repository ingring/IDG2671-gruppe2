import React, { useState, useEffect, useContext } from "react";
import InputButton from '../Button/InputButton';

import AuthContext from "../../context/AuthProvider";
import useAxiosPrivate from "../../axios/useAxiosPrivate";

export default function RequestTool(){
    const [formData, setFormData] = useState({
        toolname: "",
        description: "",
      });

      const axiosPrivate = useAxiosPrivate();
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await axiosPrivate.post(`api/tool`, 
          {
            tool: formData.toolname,
            description: formData.description
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
      };
    return(
        <div className="flex items-center justify-center w-full">
            <form className="flex justify-start flex-col pb-3 w-4/4 md:w-1/5 lg:w-1/6" onSubmit={handleSubmit}>
                <div className="pb-6">
                    <label for="toolname" className="block mb-2 text-left">Name of tool</label>
                    <input type="text" name="toolname" id="toolname" 
                        className="text-left border-grey-mediumLight p-2 h-8 rounded-md w-full" 
                        value={formData.toolname} onChange={handleChange} required></input>
                </div>
                <div className="pb-6">
                    <label for="description" className="block mb-2 text-left">Description</label>
                    <input type="text" name="description" id="description" placeholder="Usage..." 
                        className="text-left p-2 border-grey-mediumLight rounded-md w-full pb-20" 
                        value={formData.description} onChange={handleChange} required></input>
                </div>
                <InputButton value="Request tool" />
            </form>
        </div>
    )
}
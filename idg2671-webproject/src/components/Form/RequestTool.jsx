import React, { useState, useEffect, useContext } from "react";
import InputButton from '../Button/InputButton';
import AuthContext from "../../context/AuthProvider";
import useAxiosPrivate from "../../axios/useAxiosPrivate";

export default function RequestTool() {

  const { auth } = useContext(AuthContext)

  // Image cloudinary states
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");


  // File reader to turn it into an readable url
  function previewFiles(file) {
    console.log('previewFiles called with:', file);
    const reader = new FileReader();
    reader.readAsDataURL(file);

    // Show image result on page
    reader.onloadend = () => {
      console.log('Reader result: ' + reader.result);
      setImage(reader.result);
    }
  }

  // * FormData
  const [formData, setFormData] = useState({
    toolname: "",
    description: "",
    image: ""
  });

  const handleChangeFile = (e) => {
    const file = e.target.files[0]; // Get the 0 index of the file, which is the image
    console.log(e.target.files[0]);
    setFile(file);
    previewFiles(file); // Enables you to see your uploaded file
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    console.log(formData);
  };

  const axiosPrivate = useAxiosPrivate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('inni submit: ', formData)

    try {
      const response = await axiosPrivate.post('api/requests',
        {
          username: auth.username,
          name: formData.toolname,
          description: formData.description,
          image: image,
        });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form className="md:space-y-6 flex justify-start flex-col pb-3" onSubmit={e => handleSubmit(e)}>
        <div className="mb-6 md:mb-0">
          <label htmlFor="toolname" className="block mb-2 text-left">Name of tool</label>
          <input type="text" name="toolname" id="toolname"
            className="text-left border-grey-mediumLight p-2 h-9 rounded-md w-full"
            value={formData.toolname} onChange={handleChange} required></input>
        </div>
        <div className="mb-6 md:mb-0">
          <label htmlFor="description" className="block mb-2 text-left">Description</label>
          <input type="text" name="description" id="description" placeholder="Usage..."
            className="text-left p-2 border-grey-mediumLight rounded-md w-full pb-20"
            value={formData.description} onChange={handleChange} required></input>
        </div>
        <div className="pb-14 md:pb-6">
          <label htmlFor="fileInput" className="block mb-4 text-left">Upload image</label>
          <input type="file" name="image" id="fileInput" onChange={e => handleChangeFile(e)} accept="image/png, image/jpeg, image/jpg, image/svg" className="w-full rounded-md text-base bg-grey-light mb-2" required></input>
          <img src={image} alt="" />
        </div>
        <InputButton value="Request tool" />
      </form>
    </div>
  )
}
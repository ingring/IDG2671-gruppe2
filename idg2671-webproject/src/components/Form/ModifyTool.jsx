import React, { useState, useEffect } from "react";
import useAxiosPrivate from "../../axios/useAxiosPrivate"
import InputButton from '../Button/InputButton';
import Image from "./Image"
import { mode } from "@cloudinary/url-gen/actions/rotate";
import axios from "../../axios/axios";
import { useParams, useLocation } from "react-router-dom";
import { name } from "@cloudinary/url-gen/actions/namedTransformation";
import { full } from "@cloudinary/url-gen/qualifiers/fontHinting";

export default function ModifyTool({fullUrl}) {
    const axiosPrivate = useAxiosPrivate();

    // Image cloudinary
    const [file, setFile] = useState("");
    const [image, setImage] = useState('');
    const [uploadedImg, setUploadedImg] = useState("");

    // tool states 
    const [tool, setTool] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [model, setModel] = useState('');
    const [course, setCourse] = useState('None');
    const [bookable, setBookable] = useState(false);

    // Error states
    const [errorMsg, setErrorMsg]  = useState('')
    const [successMsg, setSuccessMsg]  = useState('')

    let {id} = useParams()

    const location = useLocation();
    const toolId = location.state?.toolId;

    console.log('toolId state: ', location.state)
    console.log('toolId: ', toolId)

    useEffect(() => {
        if (fullUrl === "api/bookable_tools") {
            setBookable(true);
        } else {
            setBookable(false);

        }
        async function getToolData() {
            try {
                const response = await axiosPrivate.get(`${fullUrl}/${id}`)
                setTool(response.data.name);
                setDescription(response.data.description);

                console.log(fullUrl)

                if (fullUrl === "api/bookable_tools") {
                    setCourse(response.data.course)
                    setImage(response.data.image)
                } else {
                    setQuantity(response.data.quantity);
                    setImage(response.data.image)
                }
                
            } catch (error) {
                // If an error occurs during the API request, log the error and return null
                console.error(error);
            } 
        }

        getToolData();

    }, []); // run only once, on mount



    // https://developer.mozilla.org/en-US/docs/Web/API/FileReader
    // File reader to turn it into an readable url
    function previewFiles(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        // Show image result
        reader.onloadend = () => {
            console.log('Reader result: ' + reader.result);
            setImage(reader.result);
        }
    }

    const handleChange = (property, value) => {
            switch (property) {
              case "tool":
                setTool(value);
                break;
              case "description":
                setDescription(value);
                break;
              case "quantity":
                setQuantity(value);
                break;
              case "course":
                setCourse(value);
                break;
              default:
                break;
            }
          };

    // Handle that target the uploaded file
    const handleImg = (e) => {
        const file = e.target.files[0]; // Get the 0 index of the file, which is the image
        console.log(e.target.files[0]);
        setFile(file);
        previewFiles(file); // Enables you to see your uploaded file
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const request = {
            description: description,
        };

        console.log('image: ', image)

        if(quantity) request.quantity = quantity;
        if(image) request.image = image;
        if (fullUrl === 'api/bookable_tools') {
            request.course = course;
        } else {
            request.quantity = quantity
        }

        console.log(request);

        try {
            const resp = await axiosPrivate.put(`${fullUrl}/${id}`, request)

            setErrorMsg('')
            setSuccessMsg(`Tool updated!`);
            console.log(resp);
        } catch (err) {
            console.log(err);
            setSuccessMsg('');
            setErrorMsg(err.response?.data || 'An error occurred. Please try again later.')  
        }
    }

    return (
        <div className="mb-24 w-3/5 md:w-1/5">
        <h1 className="text-xl md:text-2xl text-left mb-1">
            Modify tool:
        </h1>
        <h1 className="text-xl md:text-2xl text-left mb-10">
            {tool}
        </h1>
        <div className="flex items-center justify-center">
            <div className="w-full">
                <form onSubmit={e => handleSubmit(e)} className="md:space-y-6 flex justify-start flex-col pb-3">
                    {bookable && (
                    <>
                    <div className="mb-6 md:mb-0">
                        <label for="course" className="block mb-2 text-left">Safety course</label>
                        <input type="text" name="course" id="course" 
                        className="text-left border-grey-mediumLight p-2 h-9 rounded-md w-full" 
                        defaultValue={course} onChange={e => handleChange("course", e.target.value)}></input>
                    </div>
                    </>
                    )}
                    <div className="mb-6 md:mb-0">
                        <label for="status" className="block mb-2 text-left">Status</label>
                        <select type="text" name="status" id="status" className="text-left border-grey-mediumLight p-2 h-9 rounded-md w-full" 
                        onChange={e => handleChange("status", e.target.value)} required>
                            <option value="ok">OK</option>
                            <option value="broken">Broken</option>
                            <option value="underConstruction">Under construction</option>
                        </select>
                    </div>
                    {!bookable && (
                    <div className="mb-6 md:mb-0">
                        <label for="quantity" className="block mb-2 text-left">Quantity</label>
                        <input type="number" name="quantity" id="quantity" 
                        className="text-left border-grey-mediumLight p-2 h-9 rounded-md w-full" 
                        value={quantity} onChange={e => handleChange("quantity", e.target.value)}></input>
                    </div>
                    )}
                    <div className="mb-6 md:mb-0">
                        <label for="description" className="block mb-2 text-left">Description</label>
                        <textarea name="description" id="description" className="text-left p-2 border-grey-mediumLight rounded-md w-full pb-20" 
                        value={description} onChange={e => handleChange("description", e.target.value)}
                        required></textarea>
                    </div>
                    <div className="pb-14 md:pb-6">
                        <label htmlFor="fileInput" className="block mb-4 text-left">Upload image</label>
                        <input type="file" name="image" id="fileInput" onChange={e => handleImg(e)} accept="image/png, image/jpeg, image/jpg, image/svg" className="w-full rounded-md text-base bg-grey-light mb-2"></input>
                        <img src={image} alt="" />
                    </div>
                    <InputButton value="Submit" />
                    {errorMsg && <div class="bg-red-100 border mt-5 border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert"><p className="block sm:inline">{errorMsg}</p></div>}
                    {successMsg && <div class="bg-green-100 border mt-5 border-green-400 text-green-700 px-4 py-3 rounded relative"><p className="block sm:inline">{successMsg}</p></div>}
                
                </form>
            </div>
        </div>
        </div>
    )
}
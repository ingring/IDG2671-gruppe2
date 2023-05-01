import React, { useState } from "react";
import useAxiosPrivate from "../../axios/useAxiosPrivate"
import InputButton from '../Button/InputButton';
import Image from "./Image"
import { mode } from "@cloudinary/url-gen/actions/rotate";

export default function CreateTool() {
    const axiosPrivate = useAxiosPrivate();

    // Image cloudinary
    const [file, setFile] = useState("");
    const [image, setImage] = useState("");
    const [uploadedImg, setUploadedImg] = useState("");

    // other states 
    const [url, seturl] = useState('tools');
    const [tool, setTool] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [model, setModel] = useState('');
    const [course, setCourse] = useState('None');
    const [bookable, setBookable] = useState(false);
    


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
              case "model":
                setModel(value);
                break;
              case "course":
                setCourse(value);
                break;
              default:
                break;
            }
          };

    const handleType = (e) => {
        if (e.target.value === "bookable_tools") {
            setBookable(true);
            seturl('bookable_tools')
        } else {
            setBookable(false);
            seturl('tools')
        }
    }

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
            name: tool, 
            description: description,
            image: image
        };
    
        if (url === 'bookable_tool') {
            request.model = model;
            request.course = course;
        } else {
            request.quantity = quantity
        }

        console.log(request);

        try {
            
            const resp = await axiosPrivate.post(`api/${url}`, request)
            // const uploadedImg = result.data.public_id;
            // setUploadedImg(result.data.uploadedImg)
            console.log(resp);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className="w-full">
                <form onSubmit={e => handleSubmit(e)} className="md:space-y-6 flex justify-start flex-col pb-3">
                    <div className="flex justify-between">
                        <div>
                            <input type="radio" id="tools" name="tools" value="tools" checked={!bookable} onChange={handleType} />
                            <label htmlFor="tool" className="px-2">Regular</label>
                        </div>
                        <div>
                            <input type="radio" id="bookable_tools" name="tools" value="bookable_tools" checked={bookable} onChange={handleType} />
                            <label htmlFor="bookable_tools" className="px-2">Bookable</label>
                        </div>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <label for="title" className="block mb-2 text-left">Title</label>
                        <input type="text" name="title" id="title" 
                            className="text-left border-grey-mediumLight p-2 h-9 rounded-md w-full" 
                            value={tool} onChange={e => handleChange("tool", e.target.value)}required></input>
                    </div>
                    {bookable && (
                    <>
                    <div className="mb-6 md:mb-0">
                        <label for="title" className="block mb-2 text-left">Model</label>
                        <input type="text" name="title" id="title" 
                        className="text-left border-grey-mediumLight p-2 h-9 rounded-md w-full" 
                        value={model} onChange={e => handleChange("model", e.target.value)}></input>
                    </div>
                    {/* <div className="mb-6 md:mb-0">
                        <label for="course" className="block mb-2 text-left">Safety course</label>
                        <select type="text" name="course" id="course" className="text-left border-grey-mediumLight p-2 h-9 rounded-md w-full" 
                        onChange={e => handleChange(e)} required>
                            <option value=""></option>
                            <option value="hms">HMS</option>
                            <option value="none">None</option>
                        </select>
                    </div> */}
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
                        <input type="text" name="description" id="description" className="text-left p-2 border-grey-mediumLight rounded-md w-full pb-20" 
                        value={description} onChange={e => handleChange("description", e.target.value)}
                        required></input>
                    </div>
                    <div className="pb-14 md:pb-6">
                        <label htmlFor="fileInput" className="block mb-4 text-left">Upload image</label>
                        <input type="file" name="image" id="fileInput" onChange={e => handleImg(e)} accept="image/png, image/jpeg, image/jpg, image/svg" className="w-full rounded-md text-base bg-grey-light mb-2" required></input>
                        <img src={image} alt="" />
                    </div>
                    <InputButton value="Submit" />
                </form>
            </div>
        </div>
    )
}
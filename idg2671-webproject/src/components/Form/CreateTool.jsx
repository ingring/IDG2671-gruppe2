import React, { useState } from "react";
import axios from "../../axios/axios"
import InputButton from '../Button/InputButton';
import Image from "./Image"

export default function CreateTool() {

    // Image cloudinary
    const [file, setFile] = useState("");
    const [image, setImage] = useState("");
    const [uploadedImg, setUploadedImg] = useState("");

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

    // Handle that target the uploaded file
    const handleChange = (e) => {
        const file = e.target.files[0]; // Get the 0 index of the file, which is the image
        console.log(e.target.files[0]);
        setFile(file);
        previewFiles(file); // Enables you to see your uploaded file
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await axios.post("api/image", {
            image: image
        })
        try {
            const uploadedImg = result.data.public_id;
            setUploadedImg(uploadedImg)
            console.log(result.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className="w-full">
                <h1 className="text-xl md:text-2xl text-left mb-10">
                    Create / Modify tool
                </h1>
                <form onSubmit={e => handleSubmit(e)} className="md:space-y-6 flex justify-start flex-col pb-3">
                    <div className="mb-6 md:mb-0">
                        <label for="title" className="block mb-2 text-left">Title</label>
                        <input type="text" name="title" id="title" className="text-left border-grey-mediumLight p-2 h-9 rounded-md w-full" required></input>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <label for="course" className="block mb-2 text-left">Safety course</label>
                        <select type="text" name="course" id="course" className="text-left border-grey-mediumLight p-2 h-9 rounded-md w-full" required>
                            <option value=""></option>
                            <option value="hms">HMS</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <label for="status" className="block mb-2 text-left">Status</label>
                        <select type="text" name="status" id="status" className="text-left border-grey-mediumLight p-2 h-9 rounded-md w-full" required>
                            <option value=""></option>
                            <option value="ok">OK</option>
                            <option value="broken">Broken</option>
                            <option value="underConstruction">Under construction</option>
                        </select>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <label for="description" className="block mb-2 text-left">Description</label>
                        <input type="text" name="description" id="description" className="text-left p-2 border-grey-mediumLight rounded-md w-full pb-20" required></input>
                    </div>
                    <div className="pb-14 md:pb-6">
                        <label htmlFor="fileInput" className="block mb-4 text-left">Upload image</label>
                        <input type="file" name="image" id="fileInput" onChange={e => handleChange(e)} accept="image/png, image/jpeg, image/jpg, image/svg" className="w-full rounded-md text-base bg-grey-light" required></input>
                        <img src={image} alt="" />
                        {/* <Image uploadedImg={uploadedImg}/>  */}
                    </div>
                    <InputButton value="Submit" />
                </form>
            </div>
        </div>
    )
}
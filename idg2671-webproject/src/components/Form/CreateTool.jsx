import React from "react";
import { useState } from "react";
import axios from "axios";
import InputButton from '../Button/InputButton';
import Image from "./Image"

export default function CreateTool(){

    const [file, setFile] = useState("");
    const [image, setImage] = useState("");
    const [uploadedImg, setUploadedImg] =useState("");

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
        const result = await axios.post("http://localhost:3000/api/image", {
            image: image
        })
        try {
            const uploadedImg = result.data.public_id;
            setUploadedImg(uploadedImg)
            console.log(result.data);
        } catch(err) {
            console.log(err);
        }
    }

    return(
        <section>
        <div className="flex items-center justify-center">
            <div className="w-full sm:max-w-md">
                <div className="p-6 md:space-y-6 sm:p-8">
                    <h1 className="md:text-2xl text-left">
                        Create / Modify tool
                    </h1>
                    <form onSubmit={e => handleSubmit(e)} className="md:space-y-6 flex justify-start flex-col pb-3">
                        <div>
                            <label for="title" className="block mb-2 text-left lg:text-lg">Title</label>
                            <input type="text" name="title" id="title" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full dark:bg-grey-lighter" required></input>
                        </div>
                        <div>
                            <label for="description" className="block mb-2 text-left lg:text-lg">Description</label>
                            <input type="text" name="description" id="description" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full h-24 dark:bg-grey-lighter" required></input>
                        </div>
                        <div>
                            <label for="course" className="block mb-2 text-left lg:text-lg">Safety course</label>
                            <select type="text" name="course" id="course" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full dark:bg-grey-lighter" required>
                                <option value=""></option>
                                <option value="hms">HMS</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                        <div className="pb-6">
                            <label for="status" className="block mb-2 text-left lg:text-lg">Status</label>
                            <select type="text" name="status" id="status" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full dark:bg-grey-lighter" required>
                                <option value=""></option>
                                <option value="ok">OK</option>
                                <option value="broken">Broken</option>
                                <option value="underConstruction">Under construction</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="fileInput" className="block mb-2 text-left lg:text-lg">Upload image</label>
                            <input type="file" name="image" id="fileInput" onChange={e => handleChange(e)} accept="image/png, image/jpeg, image/jpg, image/svg" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full h-24 dark:bg-grey-lighter" required></input>
                        </div>
                        <InputButton value="Submit" />
                    </form>
                </div>
            </div>
        </div>
        <img src={image} alt="" />
        <Image uploadedImg={uploadedImg}/>
      </section>
    )
}
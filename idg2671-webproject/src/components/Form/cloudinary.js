import React, { useState } from "react";

// Image cloudinary
const [file, setFile] = useState("");
const [image, setImage] = useState("");
const [uploadedImg, setUploadedImg] = useState("");

// Source: https://developer.mozilla.org/en-US/docs/Web/API/FileReader
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
    } catch (err) {
        console.log(err);
    }
}

export { previewFiles, handleChange, handleSubmit }
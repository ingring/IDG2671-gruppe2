import React, { useState, useEffect, useContext } from "react";
import Card from "./Card";
import Image from "../../assets/img/3d-printer.jpeg";
import { getAPI } from "../../helpers/getAPI";

export default function Cards() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
        async function fetchData() {
            const url = 'bookable_tools/toolsinfo';
            const response = await getAPI(url);
            setData(response);
            console.log('response:', response)
            console.log('image: ', response.image)
        }
  
        fetchData();
    }, []); // run only once, on mount
  
    if (!data) {
        return <p>Loading...</p>;
    }

  
    return (
      <>
      {data.map((tool, index) => (
        <Card key={index} to={`/tools/${tool._id}/calendar`} title={tool.name} imgSrc={tool.image.url} imgAlt={tool.imgAlt} course={tool.course} />
      ))}
      </>
    )
  }
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Image from "../../assets/img/3d-printer.jpeg";
import { getAPI } from "../../helpers/getAPI";

export default function Cards() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
        async function fetchData() {
            const url = 'bookable_tools';
            const response = await getAPI(url);
            setData(response);
        }
  
        fetchData();
    }, []); // run only once, on mount
  
    if (!data) {
        return <p>Loading...</p>;
    }
  
    return (
      <>
      {data.map((tool, index) => (
        <Card key={index} title={tool.name} imgSrc={Image} imgAlt={tool.imgAlt} course={tool.course} />
      ))}
      </>
    )
  }
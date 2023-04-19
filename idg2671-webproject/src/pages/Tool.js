import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import DisplayTool from "../components/DisplayTool/DisplayTool";
import Image from '../assets/img/3d-printer.jpeg';

// Parsing the data with JSON.parse since we get a long piece of text when receiving 
// some JSON data from an API or from a file
// let jsonData = JSON.parse(jsonString)

let jsonData = {
  "title": "Laserkutter",
  "status": "OK",
  "course": "HMS",
  "imgSrc": Image,
  "imgAlt": "",
  "description": "Laserkutteren er et verkøty som kan gjøre mange ulike ting. Du kan for eksempel kutte ut ulike ting i ulike meterialer. Lorem ipsum, lorem lorem ipsum."
}

function ToolPage() {

  let {id} = useParams()

  const [tool, setTool] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/api/tools/${id}`);
        const toolData = await response.json();
        setTool(toolData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col items-center">
      <div className="bg-blue-lighter mb-20 flex flex-col items-center w-full">
        <div className="w-3/5 py-14 flex justify-left flex-col">
          <h1 className="text-3xl pb-12">Tool information</h1>
          <p className="w-3/5">Here you can read all information about the chosen tool. If you want to use the tool please continue to booking. To go back to the tools overview page, simply click on <i>Tools</i> in the menubar.</p>
        </div>
      </div>
      <div className="w-2/5 flex flex-col items-center bg-grey-lighter min-h-screen mb-40">
        <DisplayTool 
            title={jsonData["title"]}
            status={jsonData["status"]}
            // Hvis ikke course eksisterer - default prop kanskje 
            course={jsonData["course"]} 
            imgSrc={jsonData["imgSrc"]}
            imgAlt={jsonData["imgAlt"]} 
            description={jsonData["description"]}
        />
      </div>
    </div>
  );
}

export default ToolPage;
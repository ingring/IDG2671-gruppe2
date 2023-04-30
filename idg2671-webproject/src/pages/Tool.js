import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import DisplayTool from "../components/DisplayTool/DisplayTool";
import Image from '../assets/img/3d-printer.jpeg';
import axios from "../axios/axios";

// ! Slette denne siden? Er den nødvendig?
function ToolPage() {

  let {id} = useParams()

  const [tool, setTool] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios(`tools/${id}`);
        setTool(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col items-center">
      <div className="bg-blue-lighter mb-20 flex flex-col items-center w-full">
        <div className="w-3/5 py-16 flex justify-left flex-col">
          <h1 className="text-3xl pb-8">Tool information</h1>
          <p className="pb-6 md:w-3/5">Here you can read all information about the chosen tool. If you want to use the tool please continue to booking. To go back to the tools overview page, simply click on <i>Tools</i> in the menubar.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pb-28 w-4/5">
          <DisplayTool 
            title={tool.name}
            status={tool.status}
            course={tool.course} 
            imgSrc={Image} //Her må vi hente bilde på en ordentlig måte
            imgAlt={tool.imgAlt} 
            description={tool.description}
        />
      </div>
    </div>
  );
}

export default ToolPage;
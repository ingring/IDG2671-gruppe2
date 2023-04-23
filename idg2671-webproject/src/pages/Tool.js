import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import DisplayTool from "../components/DisplayTool/DisplayTool";
import Image from '../assets/img/3d-printer.jpeg';


function ToolPage() {

  let {id} = useParams()

  const [tool, setTool] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // URL'EN SAMSVARER MED ROUTESENE FRA API'EN, ER DU USIKKER SJEKK ROUTESENE DER.
        // GJERNE TEST UT LINKEN I NETTLESEREN DIN FØRST, SLIK AT DU VET AT DET ER RIKTIG LINK
        const response = await fetch(`https://webproject-api-production.up.railway.app/api/tools/${id}`);
        const toolData = await response.json();

        // SETT STATE SÅ DU KAN BRUKE DET SENERE I KODEN
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
        <div className="w-3/5 py-16 flex justify-left flex-col">
          <h1 className="text-3xl pb-12">Tool information</h1>
          <p className="w-3/5">Here you can read all information about the chosen tool. If you want to use the tool please continue to booking. To go back to the tools overview page, simply click on <i>Tools</i> in the menubar.</p>
        </div>
      </div>
      <div className="flex flex-col items-center bg-grey-lighter min-h-screen p-20">
        {/* HER BRUKER VI DATAEN VI HAR FETCHA, tool ER EN STATE VI LAGDE OVER. HENT UT INFO AV TOOLEN MED SAMME NAVN SOM KEY'EN I DATABASEN */}
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
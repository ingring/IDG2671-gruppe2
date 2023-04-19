import React, { useState, useEffect } from "react";
import List from "./List";
import ListElement from "./ListElement";
import { Link } from "react-router-dom";

function ListElementTool({tool}) {
    return (
        <div key={tool}>
            <Link
                to={{
                    pathname: `/tools/${tool}`,
                    state: { tools: tool }
                }}
            >
                {tool}
            </Link>
        </div>
        // <a href={url} >{tool}</a>

        // <div key={id}>
        //     {useNavigate(`/tools/${id}`)}
        // </div>
    )
}

function ListTools() {
    // const tools = [
    //     {
    //         tool:'Laserkutter',
    //         date:'28.02.2023',
    //         time:'14:00-19:00',
    //         user:'Kari Nordmann'
    //     }, 
    //     {
    //         tool:'3D printer',
    //         date:'16.03.2023',
    //         time:'16:00-19:30',
    //         user:'Ola Nordmann'
    //     },
    //     {
    //         tool:'Laserkutter',
    //         date:'28.02.2023',
    //         time:'14:00-19:00',
    //         user:'Kari Nordmann'
    //     }, 
    //     {
    //         tool:'3D printer',
    //         date:'16.03.2023',
    //         time:'16:00-19:30',
    //         user:'Ola Nordmann'
    //     }
    // ]

      const [tools, setTools] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api/tools');
        const toolsData = await response.json();
        setTools(toolsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

    return (
        <List>
            {tools.map((tool, index) => (
            <ListElement key={index}>
                <ListElementTool tool={tool.name} />
            </ListElement>
            ))}
        </List>
    )
}

export default ListTools;
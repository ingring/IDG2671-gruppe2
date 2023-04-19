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
    )
}

function ListTools() {
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
                    <div className="flex flex-row justify-between items-center">
                        <ListElementTool tool={tool.name} /> 
                        <button>
                            <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 0C5.82075 0 0 5.82075 0 13C0 20.1793 5.82075 26 13 26C20.1793 26 26 20.1793 26 13C26 5.82075 20.1793 0 13 0ZM14.0833 19.5H11.9167V11.9167H14.0833V19.5ZM13 9.20833C12.103 9.20833 11.375 8.48033 11.375 7.58333C11.375 6.68633 12.103 5.95833 13 5.95833C13.897 5.95833 14.625 6.68633 14.625 7.58333C14.625 8.48033 13.897 9.20833 13 9.20833Z" fill="#204F99" />@
                            </svg>
                        </button>
                    </div>
                 </ListElement>
                 ))}
        </List> 
    )
}

export default ListTools;
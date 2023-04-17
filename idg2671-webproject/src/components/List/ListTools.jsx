import React from "react";
import List from "./List";
import ListElement from "./ListElement";

function ListElementTool({ tool }) {
    return <a href='./tools/id' >{tool}</a>
}

function ListTools() {
    const tools = [
        {
            tool: 'Laserkutter',
            date: '28.02.2023',
            time: '14:00-19:00',
            user: 'Kari Nordmann'
        },
        {
            tool: '3D printer',
            date: '16.03.2023',
            time: '16:00-19:30',
            user: 'Ola Nordmann'
        },
        {
            tool: 'Laserkutter',
            date: '28.02.2023',
            time: '14:00-19:00',
            user: 'Kari Nordmann'
        },
        {
            tool: '3D printer',
            date: '16.03.2023',
            time: '16:00-19:30',
            user: 'Ola Nordmann'
        }
    ]
    return (
        <List>
            {tools.map((tool) =>
                <ListElement>
                    <div className="flex flex-row justify-between items-center">
                        <ListElementTool tool={tool.tool} />
                        <button>
                            <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 0C5.82075 0 0 5.82075 0 13C0 20.1793 5.82075 26 13 26C20.1793 26 26 20.1793 26 13C26 5.82075 20.1793 0 13 0ZM14.0833 19.5H11.9167V11.9167H14.0833V19.5ZM13 9.20833C12.103 9.20833 11.375 8.48033 11.375 7.58333C11.375 6.68633 12.103 5.95833 13 5.95833C13.897 5.95833 14.625 6.68633 14.625 7.58333C14.625 8.48033 13.897 9.20833 13 9.20833Z" fill="#204F99" />@
                            </svg>
                        </button>
                    </div>
                </ListElement>)}
        </List>
    )
}

export default ListTools;
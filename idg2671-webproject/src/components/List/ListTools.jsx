import React from "react";
import List from "./List";
import ListElement from "./ListElement";

function ListElementTool({tool}) {
    return <a href='./tools/id' >{tool}</a>
}

function ListTools() {
    const tools = [
        {
            tool:'Laserkutter',
            date:'28.02.2023',
            time:'14:00-19:00',
            user:'Kari Nordmann'
        }, 
        {
            tool:'3D printer',
            date:'16.03.2023',
            time:'16:00-19:30',
            user:'Ola Nordmann'
        },
        {
            tool:'Laserkutter',
            date:'28.02.2023',
            time:'14:00-19:00',
            user:'Kari Nordmann'
        }, 
        {
            tool:'3D printer',
            date:'16.03.2023',
            time:'16:00-19:30',
            user:'Ola Nordmann'
        }
    ]
    return (
        <List>
            {tools.map((tool) => <ListElement> <ListElementTool tool={tool.tool} /> </ListElement>)}
        </List> 
    )
}

export default ListTools;
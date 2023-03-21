import React from "react";
import List from "./List";
import ListElement from "./ListElement";

function ListElementBrokenTool({tool, date}) {
    return <div>{tool} {date}</div>
}

function ListBrokenTools() {
    const tools = [
        {
            tool:'3D printer',
            date:'28.02.2023'
        }
    ]
    return (
        <List>
            {tools.map((tool) => <ListElement> <ListElementBrokenTool tool={tool.tool} date={tool.date} /> </ListElement>)}
        </List> 
    )
}

export default ListBrokenTools;
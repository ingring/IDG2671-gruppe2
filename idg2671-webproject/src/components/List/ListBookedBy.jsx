import React from "react";
import "flowbite";
import List from "./List";
import ListElement from "./ListElement";

import withData from '../../helpers/withData';

function ListElementBookedBy({tool, date, time, user}) {
    return (
        <a href='./tools/id' className="flex">
            <span className="w-1/4 font-semibold px-4">{tool}</span>
            <span className="w-1/4 px-4">{date}</span>
            <span className="w-1/4 px-4">{time}</span>
            <span className="w-1/4 px-4">{user}</span>
        </a>
    )
}

function ListBookedBy({data}) {

    return (         
        <List>
            {data.map((tool) => <ListElement> <ListElementBookedBy tool={tool.tool} date={tool.date} time={tool.time} user={tool.user} /> </ListElement>)}
        </List>   
    )
}

// missing the link, waiting for back end to tell me the link
// export default withData(ListBookedBy, 'tools');
export default (ListBookedBy)
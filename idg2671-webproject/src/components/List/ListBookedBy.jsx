import React from "react";
import "flowbite";
import List from "./List";
import ListElement from "./ListElement";

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

function ListBookedBy() {
    // Dette skal egt komme fra backend
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
            {tools.map((tool) => <ListElement> <ListElementBookedBy tool={tool.tool} date={tool.date} time={tool.time} user={tool.user} /> </ListElement>)}
        </List>   
    )
}
export default ListBookedBy;
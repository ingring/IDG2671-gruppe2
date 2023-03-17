import React from "react";
import "flowbite";

function ListElement({tool, date, time, user}) {
    return (
    <li className="odd:bg-blue-lighter even:bg-grey-lighter p-4 max-w-prose text-left rounded-lg">
        <a href='./tools/id' className="flex">
            <span className="w-1/4 font-semibold px-4">{tool}</span>
            <span className="w-1/4 px-4">{date}</span>
            <span className="w-1/4 px-4">{time}</span>
            <span className="w-1/4 px-4">{user}</span>
        </a>
    </li>
    )
}

function List() {
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
        <>
        <ul className="mb-5 max-w-prose h-32 scrollbar-thin scrollbar-thumb-grey-medium scrollbar-track-grey-lighter overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
            {tools.map((tool) => <ListElement tool={tool.tool} date={tool.date} time={tool.time} user={tool.user} />)}
        </ul>
        </>
    )
}
export default List;
import React from "react";
import "flowbite";
import List from "./List";
import ListElement from "./ListElement";

function ListElementBookedBy({tool, date, time, user}) {
    return (
    <div className="flex justify-between">
        <a href='./tools/id' className="flex">
            <span className="w-1/4 font-semibold px-4">{tool}</span>
            <span className="w-1/4 px-4">{date}</span>
            <span className="w-1/4 px-4">{time}</span>
            <span className="w-1/4 px-4">{user}</span>
        </a>
        {/* Deletes the booking */}
        <button>
            <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0C6.2685 0 0 6.2685 0 14C0 21.7315 6.2685 28 14 28C21.7315 28 28 21.7315 28 14C28 6.2685 21.7315 0 14 0ZM15.6497 14C15.6497 14 19.3118 17.6622 19.4915 17.8418C19.9477 18.298 19.9477 19.0365 19.4915 19.4915C19.0353 19.9477 18.2968 19.9477 17.8418 19.4915C17.6622 19.313 14 15.6497 14 15.6497C14 15.6497 10.3378 19.3118 10.1582 19.4915C9.702 19.9477 8.9635 19.9477 8.5085 19.4915C8.05233 19.0353 8.05233 18.2968 8.5085 17.8418C8.687 17.6622 12.3503 14 12.3503 14C12.3503 14 8.68817 10.3378 8.5085 10.1582C8.05233 9.702 8.05233 8.9635 8.5085 8.5085C8.96467 8.05233 9.70317 8.05233 10.1582 8.5085C10.3378 8.687 14 12.3503 14 12.3503C14 12.3503 17.6622 8.68817 17.8418 8.5085C18.298 8.05233 19.0365 8.05233 19.4915 8.5085C19.9477 8.96467 19.9477 9.70317 19.4915 10.1582C19.313 10.3378 15.6497 14 15.6497 14Z" fill="#F0B3B3"/>
            </svg>
        </button>
    </div>
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
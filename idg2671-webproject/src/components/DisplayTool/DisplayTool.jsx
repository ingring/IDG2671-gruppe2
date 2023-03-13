import React from "react";
import Button from '../Button/Button';

function DisplayTool(props) {
    return (
        <div className="text-left content-center max-w-prose m-auto text-xl">
            <h1 className="my-5 text-3xl">{props.title}</h1>
            <img className="my-5" src={props.imgSrc} alt={props.imgAlt} />
            <div className="flex">
                <p>Status: {props.status}</p>
                {/* Jeg har ikke helt funnet best måte å legge til ikonet med tanke på om statusen er ok eller ødelagt,
                så foreløpig så har jeg bare svg'en her hehe */}
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.50156 0.100098C3.86266 0.100098 0.101562 3.8612 0.101562 8.5001C0.101562 13.139 3.86266 16.9001 8.50156 16.9001C13.1405 16.9001 16.9016 13.139 16.9016 8.5001C16.9016 3.8612 13.1405 0.100098 8.50156 0.100098ZM13.1965 6.895L7.90446 12.187C7.77286 12.3186 7.59506 12.3921 7.40956 12.3921C7.22406 12.3921 7.04556 12.3186 6.91466 12.187L4.49756 9.7699C4.22386 9.4962 4.22386 9.0538 4.49756 8.7801C4.77126 8.5064 5.21366 8.5064 5.48736 8.7801L7.40956 10.7023L12.2067 5.9052C12.4804 5.6315 12.9228 5.6315 13.1965 5.9052C13.4702 6.1789 13.4702 6.6213 13.1965 6.895Z" fill="#D0ECCD"/>
                </svg>
            </div>
            <div className="">Course: {props.course}</div>
            <div className="my-5 py-5">
                {props.description}
            </div>
            <Button title="Book" />
        </div>
    )
}
export default DisplayTool;
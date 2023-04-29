import React from "react";
import InputButton from '../Button/InputButton';

export default function RequestTool() {
    return (
        <div className="flex items-center justify-center w-full">
            <form className="flex justify-start flex-col pb-6 w-3/5 md:w-1/5">
                <div className="pb-6">
                    <label for="toolname" className="block mb-2 text-left">Name of tool</label>
                    <input type="text" name="toolname" id="toolname" className="text-left border-grey-mediumLight p-2 h-8 rounded-md w-full" required></input>
                </div>
                <div className="pb-6">
                    <label for="description" className="block mb-2 text-left">Description</label>
                    <input type="text" name="description" id="description" placeholder="Usage..." className="text-left p-2 border-grey-mediumLight rounded-md w-full pb-20" required></input>
                </div>
                <InputButton value="Request tool" />
            </form>
        </div>
    )
}
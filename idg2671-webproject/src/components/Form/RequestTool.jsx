import React from "react";
import InputButton from '../Button/InputButton';

export default function RequestTool(){
    return(
        <section>
        <div className="flex items-center justify-center ">
            <div className="w-full sm:max-w-md">
                <div className="p-6 md:space-y-6 sm:p-8">
                    <form className="md:space-y-6 flex justify-start flex-col pb-6" action="#">
                        <div>
                            <label for="toolname" className="block mb-2 text-left lg:text-lg">Name of tool</label>
                            <input type="text" name="toolname" id="toolname" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full dark:bg-grey-lighter" required=""></input>
                        </div>
                        <div className="pb-6">
                            <label for="description" className="block mb-2 text-left lg:text-lg">Description</label>
                            <input type="text" name="description" id="description" placeholder="Usage" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full dark:bg-grey-lighter h-28" required=""></input>
                        </div>
                        <InputButton value="Request tool" />
                    </form>
                </div>
            </div>
        </div>
      </section>
    )
}
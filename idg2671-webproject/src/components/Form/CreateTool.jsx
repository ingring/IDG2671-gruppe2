import React from "react";
import Button from "../Button/Button";

export default function CreateTool(){
    return(
        <section>
        <div className="flex items-center justify-center md:h-screen">
            <div className="w-full sm:max-w-md">
                <div className="p-6 md:space-y-6 sm:p-8">
                    <h1 className="md:text-2xl text-left">
                        Modify tool
                    </h1>
                    <form className="md:space-y-6 flex justify-start flex-col pb-3" action="#">
                        <div>
                            <label for="title" className="block mb-2 text-left xl:text-xl">Title</label>
                            <input type="text" name="title" id="title" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full p-2.5 dark:bg-grey-lighter" required=""></input>
                        </div>
                        <div>
                            <label for="description" className="block mb-2 text-left xl:text-xl">Description</label>
                            <input type="text" name="description" id="description" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full h-24 p-2.5 dark:bg-grey-lighter" required=""></input>
                        </div>
                        <div>
                            <label for="course" className="block mb-2 text-left xl:text-xl">Safety course</label>
                            <select type="text" name="course" id="course" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full p-2.5 dark:bg-grey-lighter" required="">
                                <option value=""></option>
                                <option value="hms">HMS</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                        <div>
                            <label for="status" className="block mb-2 text-left xl:text-xl">Status</label>
                            <select type="text" name="status" id="status" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full p-2.5 dark:bg-grey-lighter" required="">
                                <option value=""></option>
                                <option value="ok">OK</option>
                                <option value="broken">Broken</option>
                                <option value="underConstruction">Under construction</option>
                            </select>
                        </div>
                    </form>
                    <Button title="Submit"/>
                </div>
            </div>
        </div>
      </section>
    )
}
import React from "react";
import InputButton from '../Button/InputButton';

export default function CreateTool(){
    return(
        <section>
        <div className="flex items-center justify-center">
            <div className="w-full sm:max-w-md">
                <div className="p-6 md:space-y-6 sm:p-8">
                    <h1 className="md:text-2xl text-left">
                        Create / Modify tool
                    </h1>
                    <form className="md:space-y-6 flex justify-start flex-col pb-3" action="#">
                        <div>
                            <label for="title" className="block mb-2 text-left lg:text-lg">Title</label>
                            <input type="text" name="title" id="title" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full dark:bg-grey-lighter" required=""></input>
                        </div>
                        <div>
                            <label for="description" className="block mb-2 text-left lg:text-lg">Description</label>
                            <input type="text" name="description" id="description" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full h-24 dark:bg-grey-lighter" required=""></input>
                        </div>
                        <div>
                            <label for="course" className="block mb-2 text-left lg:text-lg">Safety course</label>
                            <select type="text" name="course" id="course" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full dark:bg-grey-lighter" required="">
                                <option value=""></option>
                                <option value="hms">HMS</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                        <div className="pb-6">
                            <label for="status" className="block mb-2 text-left lg:text-lg">Status</label>
                            <select type="text" name="status" id="status" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full dark:bg-grey-lighter" required="">
                                <option value=""></option>
                                <option value="ok">OK</option>
                                <option value="broken">Broken</option>
                                <option value="underConstruction">Under construction</option>
                            </select>
                        </div>
                        <InputButton value="Submit" />
                    </form>
                </div>
            </div>
        </div>
      </section>
    )
}
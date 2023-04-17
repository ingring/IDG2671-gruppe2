import React from "react";
import Button from "../Button/Button";

export default function CreateUser(){
    return(
        <section>
        <div className="flex items-center justify-center">
            <div className="w-full sm:max-w-md">
                <div className="p-6 md:space-y-6 sm:p-8">
                    <h1 className="md:text-2xl text-left">
                        Create / Modify user
                    </h1>
                    <form className="md:space-y-6 flex justify-start flex-col pb-3" action="#">
                        <div>
                            <label for="firstname" className="block mb-2 text-left lg:text-lg">First name</label>
                            <input type="text" name="firstname" id="firstname" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full dark:bg-grey-lighter" required=""></input>
                        </div>
                        <div>
                            <label for="lastname" className="block mb-2 text-left lg:text-lg">Last name</label>
                            <input type="text" name="lastname" id="lastname" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full dark:bg-grey-lighter" required=""></input>
                        </div>
                        <div>
                            <label for="username" className="block mb-2 text-left lg:text-lg">Username</label>
                            <input type="text" name="username" id="username" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full dark:bg-grey-lighter" required=""></input>
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-left lg:text-lg">Email</label>
                            <input type="text" name="email" id="email" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full dark:bg-grey-lighter" required=""></input>
                        </div>
                        <div>
                            <label for="field_of_study" className="block mb-2 text-left lg:text-lg">Field of study</label>
                            <select type="text" name="field_of_study" id="field_of_study" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full dark:bg-grey-lighter" required="">
                                <option value=""></option>
                                <option value="BWU">BWU</option>
                                <option value="BIXD">BIXD</option>
                                <option value="BMED">BMED</option>
                                <option value="AARSWEB">AARSWEB</option>
                                <option value="MIXD">MIXD</option>
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
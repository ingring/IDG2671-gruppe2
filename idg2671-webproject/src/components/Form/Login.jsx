import React from "react"
import InputButton from '../Button/InputButton';

export default function Login() {
    return (
        <div className="flex items-center justify-center w-2/6">
            <div className="w-full sm:max-w-md">
                <div className="p-6 md:space-y-6 sm:p-8">
                    <form className="md:space-y-6 flex justify-start flex-col pb-6" action="#">
                        <div>
                            <label for="email" className="block mb-2 text-left lg:text-lg">Email</label>
                            <input type="email" name="email" id="email" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full dark:bg-grey-lighter" placeholder="name@stud.ntnu.no" required=""></input>
                        </div>
                        <div className="pb-6">
                            <label for="password" className="block mb-2 text-left lg:text-lg">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="text-left border border-grey-mediumLight lg:text-lg rounded-lg w-full dark:bg-grey-lighter" required=""></input>
                        </div>
                        <InputButton value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

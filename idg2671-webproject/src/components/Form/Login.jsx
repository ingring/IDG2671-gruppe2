import React from "react"
import Button from '../Button/Button';

export default function Login() {
    return (

        <section>
        <div className="flex items-center justify-center md:h-screen">
            <div className="w-full sm:max-w-md">
                <div className="p-6 md:space-y-6 sm:p-8">
                    <h1 className="font-bold md:text-2xl text-left">
                        Sign in to book tools
                    </h1>
                    <form className="md:space-y-6 flex justify-start flex-col" action="#">
                        <div>
                            <label for="email" className="block mb-2 text-left">Email</label>
                            <input type="email" name="email" id="email" className="text-left border border-blue-darker sm:text-sm rounded-lg w-full p-2.5 dark:bg-grey-lighter" placeholder="name@ntnu.no" required=""></input>
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-left">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="text-left border border-blue-darker sm:text-sm rounded-lg w-full p-2.5 dark:bg-grey-lighter" required=""></input>
                        </div>
                        <Button title="Submit"/>
                    </form>
                </div>
            </div>
        </div>
      </section>


        
    )
}

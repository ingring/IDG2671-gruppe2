import React from "react"
import Button from '../Button/Button';

export default function Login() {
    return (

        <section>
        <div class="flex items-center justify-center md:h-screen">
           
            <div class="w-full sm:max-w-md">
                <div class="p-6 md:space-y-6 sm:p-8">
                    <h1 class="font-bold text-gray-900 md:text-2xl">
                        Sign in to book tools
                    </h1>
                    <form class="md:space-y-6" action="#">
                        <div>
                            <label for="email" className="block mb-2">Email</label>
                            <input type="email" name="email" id="email" class="border sm:text-sm rounded-lg focus:ring-primary-600 w-full p-2.5 dark:bg-grey-lighter" placeholder="name@company.com" required=""></input>
                        </div>
                        <div>
                            <label for="password" class="block mb-2">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class=" border sm:text-sm rounded-lg w-full p-2.5 dark:bg-grey-lighter" required=""></input>
                        </div>
                        
                        <Button title="Submit"/>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <a href="Register.js" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </section>


        
    )
}

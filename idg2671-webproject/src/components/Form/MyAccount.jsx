import React from "react"
import Button from '../Button/Button';

export default function MyAccountPage() {
    return (

        
<section>
        <div class="flex items-center justify-center md:h-screen">
           
            <div class="w-full sm:max-w-md">
                <div class="p-6 md:space-y-6 sm:p-8">
                    <h1 class="font-bold text-gray-900 md:text-2xl">
                        My Account
                    </h1>
                    <form class="md:space-y-6" action="#">
                    <div>
                        <label for="name" className="block mb-2">Name</label>
                            <input type="text" name="name" id="name" class="border sm:text-sm rounded-lg focus:ring-primary-600 w-full p-2.5 dark:bg-grey-lighter" placeholder="Name" required=""></input>
                        </div>
                        <div>
                            <label for="email" className="block mb-2">Email</label>
                            <input type="email" name="email" id="email" class="border sm:text-sm rounded-lg focus:ring-primary-600 w-full p-2.5 dark:bg-grey-lighter" placeholder="name@company.com" required=""></input>
                        </div>
                        <div>
                            <label for="study" className="block mb-2">Study</label>
                            <input type="text" name="study" id="study" class="border sm:text-sm rounded-lg focus:ring-primary-600 w-full p-2.5 dark:bg-grey-lighter" placeholder="Study" required=""></input>
                        </div>
                        <div>
                            <label for="department" className="block mb-2">Department</label>
                            <input type="text" name="department" id="department" class="border sm:text-sm rounded-lg focus:ring-primary-600 w-full p-2.5 dark:bg-grey-lighter" placeholder="Department" required=""></input>
                        </div>
                        <Button title="Save"/>
                    </form>
                </div>
            </div>
        </div>
      </section>


        
    )
}
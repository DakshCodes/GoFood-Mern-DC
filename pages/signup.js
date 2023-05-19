import Link from "next/link"
import { useState } from "react";

const signup = () => {
   

    return (
        <div className="py-16 mx-auto ">
            <h1 class="text-2xl font-bold mb-6 text-center">Registration Form</h1>
            <form action="/api/register" method="post" class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        type="text" name="name" placeholder="your name"  />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        type="email" name="email"  />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        type="password" name="password"  />
                </div>
                <button
                    class="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                    type="submit" >Register
                </button>
                <br />
                <Link href={'/login'} className=' font-medium text-sm'>Already a user</Link>
            </form>
        </div>
    )
}

export default signup

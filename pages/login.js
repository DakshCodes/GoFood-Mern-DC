import Link from "next/link"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const login = () => {
  // const navigate = useNavigate();

  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  })

  const inputhandle = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    })
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Vaild Credentials")
    }
    if (json.success) {
      //  navigate('/');
    }
  }

  return (
    <div className="py-16 mx-auto ">
      <h1 class="text-2xl font-bold mb-6 text-center">Login Form</h1>
      <form onSubmit={handleSubmit} class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="email" name="email" value={credentials.email} onChange={inputhandle} />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
          <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="password" name="password" value={credentials.password} onChange={inputhandle} />
        </div>
        <button
          class="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
          type="submit">Login
        </button>
        <br />
        <Link href={'/signup'} className=' font-medium text-sm'>I'm a new user</Link>
      </form>
    </div>
  )
}

export default login

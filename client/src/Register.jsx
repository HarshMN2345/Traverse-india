import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Register = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [username,setUsername] = useState('');
    async function registerUser(e){
        e.preventDefault();
        try{
          await axios.post('http://localhost:4000/register',{email,password,username});
          alert("User Registered");
        }catch(err){
          alert("user already exists or some error occured");
        }
    }
  return (
    <section className="bg-red-30">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          Register for an Account
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={registerUser}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Name
            </label>
            <input
              type="text"
              name="username"
              id="text"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Harsh Mahajan"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmpassword"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              id="confirmpassword"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              required=""
            />
          </div>
          <button
            type="submit"
            className="w-full bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded "
          >
            Register
          </button>
          <p className="text-sm font-light text-gray-500">
            Already have an account yet?{" "}
            <Link
              to="/signin"
              className="font-medium text-primary-600 hover:underline"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

  )
}

export default Register
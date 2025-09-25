import React, { useState } from "react";
import Loader from "./Loader";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate=useNavigate()


     // state for UI
     const[loading,setLoading] =useState(false)
     const[success,setSuccess] =useState("")
     const[error,setError] =useState("")
  

  const handleSubmit = async (e) => {
    // prevent the site from reloading
    e.preventDefault();
    // update the loading hook with new message
    setLoading(true)
    try{
      const data = new FormData()
      data.append("email",email)
      data.append("password",password)
      // await for a response from the api
      const response = await axios.post("https://arnold254.pythonanywhere.com/api/signin",data)
      // set the loading to false so that it stops loading
      setLoading(false)
      
      console.log(response.data)
      if (response.data.message =="Login succesful"){
      localStorage.setItem("user",JSON.stringify(response.data.user))
        navigate("/")
          }
    else{
      setError(response.data.message)
    }
  }
    catch(error){
      // set the loading to false so that it stops loading
      setLoading(false)
      setError("An error occured....")

    }
  };
  
  return (
    
    <div className="row justify-content-center text-center">
    <div className="col-md-6 card shadow p-4 text-center">
    <main className="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700">
      <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
        <h1 className="text-4xl font-semibold">Welcome back.</h1>
        {/* Loader */}
       {loading && <Loader />}

{/* Messages */}
{success && <p className="text-success">{success}</p>}
{error && <p className="text-danger">{error}</p>}

      </div>

      <form
        onSubmit={handleSubmit}
        className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6"
      >
        <input
          className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="flex items-center">
          <div className="w-1/2 flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="mt-1 mr-2"
            />
            <label htmlFor="remember-me">Remember me!</label>
          </div>
          <button
            className="ml-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900"
            type="submit"
          >
            Log In
          </button>
        </div>
      </form>

      {message && <p className="text-red-500 font-medium">{message}</p>}
    </main>
    
    </div>
    </div>
    
    
  );
};

export default Signin;

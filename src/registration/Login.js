import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Toaster, toast } from "sonner"
import axios from 'axios';
import { loginHost } from "../Hosts.js"

function Login() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logMe = async(evt) => {
    evt.preventDefault();

    try {
      const res = await axios.post( loginHost, {
        email: email,
        password: password
      });

      if(res.data.status) {
        localStorage.setItem("current-user", JSON.stringify(res.data.user));
        navigate('/');
      } else {
        toast.error( 
          res.data.msg, {
              position: "bottom-right",
              duration: 3000
            })
      }
    } catch(err) {
      console.error(err);
    };

  }

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <form className="w-[27rem]" onSubmit={logMe}>
        <h2 
          className="font-bold text-lg mb-5"
          style={{
            color: "#4900a2",
            fontFamily: "Barlow, sans-serif",
            fontSize: "30px",
            letterSpacing: "2px"
          }}
          >Login</h2>

        <label for="email" className="mt-5">E-mail</label>
          <div className="rounded-md mt-2 mb-4 pl-3 pt-2 pr-2 pb-2 w-[80%] h-[40px] border-[1px] border-gray-200">
            <input 
              type="email"
              placeholder="Write email" 
              id="email"
              className="w-full border-none outline-none"
              onChange={e => setEmail(e.target.value)}/>
          </div>

        <label for="password" className="mt-5">Password</label>
          <div className="rounded-md mt-2 mb-4 pl-3 pt-2 pr-2 pb-2 w-[80%] h-[40px] border-[1px] border-gray-200">
            <input 
              type="password"
              placeholder="Write Password" 
              id="password"
              className="w-full border-none outline-none"
              onChange={e => setPassword(e.target.value)}/>
          </div>

        <span className="mt-5 mb-5 text-sm">
          Don't have an account` <a href="/register" className="text-red-900">Register</a>
        </span>

        <button 
          type="submit"
          className="mt-5 w-[80%] h-[40px] text-white font-bold rounded-md border-none cursor-pointer hover:opacity-70"
          style={{background: "linear-gradient(90deg, #8832ff, #a066ff)"}}>
            Submit
        </button>
      </form>

      <Toaster richColors/>
    </div>
  )
}

export default Login
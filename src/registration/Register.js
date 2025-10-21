import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Toaster, toast } from "sonner"
import { registerHost } from "../Hosts.js"

function Register() {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [correctPassword, setCorrectPassword] = useState('');

  const addValues = async(evt) => {
    evt.preventDefault();

    if(password == correctPassword) {
      try {
        const res = await axios.post( registerHost, {
          username: username,
          email: email,
          password: password
        });

        if (res.data.status) {
          localStorage.setItem("current-user", JSON.stringify(res.data.user));
          navigate('/');
        } else {
          toast.error( res.data.msg, {
            position: "bottom-right",
            duration: 3000
          })
        }

      } catch(err) {
        console.error(err);
      }

    } else {
      toast.error("Your password and correct password must be a same!!!", {
        position: "bottom-right",
        duration: 3000
      });
    };

  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <form className="w-[27rem]" onSubmit={addValues}>
        <h2 
          className="font-bold text-lg mb-5"
          style={{
            color: "#4900a2",
            fontFamily: "Barlow, sans-serif",
            fontSize: "30px",
            letterSpacing: "2px"
          }}
          >Register</h2>

        <label for="username" className="mt-[20px]">Username</label>
          <div className="rounded-md mt-2 mb-4 pl-3 pt-2 pr-2 pb-2 w-[80%] h-[40px] border-[1px] border-gray-200">
            <input 
              type="text"
              placeholder="Write username" 
              id="username"
              className="w-full border-none outline-none"
              onChange={e => setUsername(e.target.value)}/>
          </div>

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

        <label for="correctpassword" className="mt-5">Correct Password</label>
          <div className="rounded-md mt-2 mb-4 pl-3 pt-2 pr-2 pb-2 w-[80%] h-[40px] border-[1px] border-gray-200">
            <input 
              type="password"
              placeholder="Write Password" 
              id="correctpassword"
              className="w-full border-none outline-none"
              onChange={e => setCorrectPassword(e.target.value)}/>
          </div>

        <span className="mt-5 mb-5 text-sm">
          Already have an account` <a href="/login" className="text-red-900">Login</a>
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

export default Register
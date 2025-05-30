
import React, { useState,useContext } from 'react'
import { AppContext } from '../context/Context'

function Login() {
const {HandleLogin,loading}=useContext(AppContext)
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [error, setError] = useState('');
const HandleSubmit=(e)=>{
    e.preventDefault()
    try {
         HandleLogin({email,password})
    } catch (error) {
      setError(error.message||'Failed To Login')
    }finally{
      setEmail('')
      setPassword('')
    }
 
    
}

  return (
    <section className="relative  flex lg:flex-row flex-col max-w-3xl mx-auto sm:p-16 pb-6 !pt-[126px] px-8 min-h-[calc(100vh-80px)]">
         
          <div className="flex-1 min-w-[20%] flex bg-purple-600/20 backdrop-blur-lg  rounded-xl p-6 max-w-md mx-auto  shadow-2xl flex-col">
            <h1 className="sm:text-5xl text-3xl  font-semibold sm:leading-snug font-poppins">
              Sign In
            </h1>
    
            <form
            onSubmit={HandleSubmit}
              className="  w-full flex flex-col gap-7 mt-7"
            >
              {error&&<span className='text-sm sm:text-base  text-red-500 text-center'>{error}</span>}
    
              <label className="font-semibold">
                Email
                <input
                  type="email"
                  name="email"
                  className="bg-purple-100 outline-purple-400   text-sm rounded-lg  block w-full p-2.5 mt-2.5 font-normal "
                  placeholder="anything@gmail.com"
                  required
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
              
                />
              </label>
              <label className="font-semibold">
                Password
                <input
                  type="password"
                  name="Password"
                  className="bg-purple-100 outline-purple-400   text-sm rounded-lg  block w-full p-2.5 mt-2.5 font-normal "
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </label>
    
              <button
                type="submit"
                disabled={loading}
                className={` cursor-pointer  ${loading?'bg-gray-800':'bg-gradient-to-br from-purple-400 to-purple-500  '} text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
              >
                {loading ? "Sending..." : "Sign In"}
              </button>
            </form>
          </div>
        </section>
  )
}

export default Login
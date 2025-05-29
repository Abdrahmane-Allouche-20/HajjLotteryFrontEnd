import React, { useState, useContext } from 'react';
import { AppContext } from '../context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const { HandleRegister, loading } = useContext(AppContext);
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const SendData = async (e) => {
    e.preventDefault();

    try {
      await HandleRegister({ email, username, password });
      
      toast.success('✅ Registered successfully!', {
        position: 'top-right',
        autoClose: 3000,
      });
    } catch (err) {
      setError(err.message || 'Failed to register')
      toast.error(`❌ ${err.message || 'Failed to register'}`, {
        position: 'top-right',
        autoClose: 3000,
      });
    } finally {
      setUserName('');
      setEmail('');
      setPassword('');
    }
  }
 

 

  return (
    <section className="relative flex lg:flex-row flex-col max-w-3xl mx-auto sm:p-16 pb-6 !pt-[126px] px-8 min-h-[calc(100vh-80px)]">
      <div className="flex-1 min-w-[20%] flex bg-orange-600/20 backdrop-blur-lg border border-green-200/20 rounded-xl p-6 max-w-md mx-auto  shadow-2xl flex-col">
        <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins">
          Sign Up
        </h1>
          {error&&<span className='text-sm sm:text-base  text-red-500 text-center'>{error}</span>}

        <form onSubmit={SendData} className="w-full flex flex-col gap-7 mt-7">
          <label className="font-semibold">
            User Name
            <input
              type="text"
              name="username"
              className="bg-[#ffefb7] outline-orange-400 text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-2.5 font-normal"
              placeholder="User Name"
              required
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>

          <label className="font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="bg-[#ffefb7] outline-orange-400 text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-2.5 font-normal"
              placeholder="anything@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="font-semibold">
            Password
            <input
              type="password"
              name="password"
              className="bg-[#ffefb7] outline-orange-400 text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-2.5 font-normal"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>


          <button
            type="submit"
            disabled={loading}
            className={`text- cursor-pointer ${loading?'bg-gray-800':'bg-gradient-to-br from-orange-400 to-orange-600 text-white '} text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
          >
            {loading ? 'Sending...' : 'Sign Up'}
          </button>
        </form>
      </div>

      <ToastContainer />
    </section>
  );
}

export default Register;

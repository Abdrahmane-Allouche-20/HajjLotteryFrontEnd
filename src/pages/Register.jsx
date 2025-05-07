import React, { useState, useContext } from 'react';
import { AppContext } from '../context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const { HandleRegister, loading, error } = useContext(AppContext);
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SendData = async (e) => {
    e.preventDefault();

    try {
      await HandleRegister({ username, email, password });

      toast.success('✅ Registered successfully!', {
        position: 'top-right',
        autoClose: 3000,
      });

      setUserName('');
      setEmail('');
      setPassword('');
    } catch (err) {
      toast.error(`❌ Registration failed: ${err.message || 'Unknown error'}`, {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-w-3xl mx-auto sm:p-16 pb-6 !pt-[126px] px-8 min-h-[calc(100vh-80px)]">
      <div className="flex-1 min-w-[20%] flex bg-green-400/10 backdrop-blur-lg border border-green-200/20 rounded-xl p-6 max-w-md mx-auto text-white shadow-2xl flex-col">
        <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins">
          Sign Up
        </h1>

        <form onSubmit={SendData} className="w-full flex flex-col gap-7 mt-7">
          <label className="font-semibold">
            User Name
            <input
              type="text"
              name="userName"
              className="bg-green-100 outline-green-600 text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-2.5 font-normal"
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
              className="bg-green-100 outline-green-600 text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-2.5 font-normal"
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
              name="Password"
              className="bg-green-100 outline-green-600 text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-2.5 font-normal"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="text-white cursor-pointer bg-gradient-to-br from-green-400 to-green-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? 'Sending...' : 'Sign Up'}
          </button>
        </form>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </section>
  );
}

export default Register;

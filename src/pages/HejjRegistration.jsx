
import React, { useState,useContext } from 'react'
import { AppContext } from '../context/Context'
function HejjRegistration() {
  const {addRegistor,loading,error}=useContext(AppContext)
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState('')
  const [birthdate,setBirthdate]=useState('')
  const [nationality,setNationality]=useState('')
  const [passport, setPassport] = useState('')
  

  const HandleSubmit = async (e) => {
    e.preventDefault()
    addRegistor({firstname,lastname,phone,gender,birthdate,nationality,passport})
  }

  return (
    <section className="relative flex lg:flex-row flex-col max-w-4xl mx-auto sm:p-16 pb-6 !pt-[126px] px-8 min-h-[calc(100vh-80px)]">
      <div className="flex-1 min-w-[50%] flex bg-green-400/10 backdrop-blur-lg border border-green-200/20 rounded-xl p-6  mx-auto text-white shadow-2xl flex-col">
        <h1 className="sm:text-3xl text-xl font-semibold sm:leading-snug font-poppins">
          Hajj Registration
        </h1>

        <form onSubmit={HandleSubmit} className="w-full flex flex-col gap-7 mt-7">

        {error&&<span className='text-sm sm:text-base  text-red-500 text-center'>{error}</span>}
          <label className="font-semibold">
            First Name
            <input
              type="text"
              name="firstName"
              className="bg-green-100  outline-green-600  text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-2.5 font-normal"
              placeholder="First Name"
              required
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>

          <label className="font-semibold">
            Last Name
            <input
              type="text"
              name="lastName"
              className="bg-green-100 outline-green-600  text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-2.5 font-normal"
              placeholder="Last Name"
              required
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>

          <label className="font-semibold">
            Phone Number
            <input
              type="tel"
              name="phone"
              className="bg-green-100  outline-green-600  text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-2.5 font-normal"
              placeholder="0777777777"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label className="font-semibold">
            Birth Date
            <input
              type="date"
              name="Birth Date"
              className="bg-green-100 outline-green-600  text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-2.5 font-normal"
              placeholder="Last Name"
              required
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </label>
          <label className="font-semibold  block ">
            Gender
            <select
              name="gender"
              value={gender} // Bind the value to the gender state
              onChange={(e) => setGender(e.target.value)} // Update the gender state when selection changes
              className="mt-2 block sm:text-base text-sm w-full px-4 py-2 bg-green-100 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-700"
            >
              <option value="" disabled>Select Gender</option>  {/* Placeholder option */}
              <option value="male">Men</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label className="font-semibold">
            Nationality
            <input
              type="text"
              name="lastName"
              className="bg-green-100 outline-green-600  text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-2.5 font-normal"
              placeholder="Last Name"
              required
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            />
          </label>
          <label className="font-semibold">
            Passport Number
            <input
              type="number"
              name="passport"
              className="bg-green-100  outline-green-600  text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-2.5 font-normal"
              placeholder="Passport Number"
              required
              value={passport}
              onChange={(e) => setPassport(e.target.value)}
            />
          </label>
          

          <button
            type="submit"
            disabled={loading}
            className="text-white cursor-pointer bg-gradient-to-br from-green-400 to-green-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? 'Sending...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default HejjRegistration

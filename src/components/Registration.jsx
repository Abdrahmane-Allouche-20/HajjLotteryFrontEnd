import {useState,useContext,useEffect}from 'react'
import { AppContext } from '../context/Context'
function Registration() {

      const {addRegistor,loading,error,user,handleSingleRegister}=useContext(AppContext)
    
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
 useEffect(() => {
  const fetchData = async () => {
    if (user?._id) {
      
      await handleSingleRegister(user._id)
    }
  };
  fetchData();
}, [user]); // ✅ Correct dependency

  return (
     <div className="flex-1 min-w-[50%] flex bg-purple-600/20 backdrop-blur-lg  rounded-xl p-6  mx-auto  shadow-2xl flex-col">
        <h1 className="sm:text-3xl text-xl text-[#25204b] font-semibold sm:leading-snug font-poppins">
          Hajj Registration
        </h1>

        <form onSubmit={HandleSubmit} className="w-full flex flex-col gap-7 mt-7">

        {error&&<span className='text-sm sm:text-base  text-red-500 text-center'>{error}</span>}
          <label className="font-semibold">
            First Name
            <input
              type="text"
              name="firstName"
              className="bg-purple-100 outline-purple-400   text-sm rounded-lg block w-full p-2.5 mt-2.5 font-normal"
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
              className="bg-purple-100 outline-purple-400   text-sm rounded-lg block w-full p-2.5 mt-2.5 font-normal"
              placeholder="Last Name"
              required
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label className="font-semibold">
            email
            <input
              type="text"
              name="email"
              className="bg-purple-100/50 outline-purple-400 cursor-not-allowed  text-gray-900/45 text-sm rounded-lg block w-full p-2.5 mt-2.5 font-normal"
              placeholder="Nationality"
              disabled
              value={user?.email||""}
            />
          </label>
          <label className="font-semibold">
            Phone Number
            <input
              type="tel"
              name="phone"
              className="bg-purple-100 outline-purple-400   text-sm rounded-lg block w-full p-2.5 mt-2.5 font-normal"
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
              className="bg-purple-100 outline-purple-400   text-sm rounded-lg block w-full p-2.5 mt-2.5 font-normal"
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
              className="mt-2 block sm:text-base text-sm w-full px-4 py-2 bg-purple-100  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 "
            >
              <option value="" disabled>Select Gender</option>  {/* Placeholder option */}
              <option value="male">Men</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label className="font-semibold">
          Nationality
        <select
    name="nationality"
    className="bg-purple-100 outline-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500  text-sm rounded-lg block w-full p-2.5 mt-2.5 font-normal"
    required
    value={nationality}
    onChange={(e) => setNationality(e.target.value)}
  >
    <option value="">Select your nationality</option>
    <option value="Algeria">Algeria</option>
    <option value="Bahrain">Bahrain</option>
    <option value="Comoros">Comoros</option>
    <option value="Djibouti">Djibouti</option>
    <option value="Egypt">Egypt</option>
    <option value="Iraq">Iraq</option>
    <option value="Jordan">Jordan</option>
    <option value="Kuwait">Kuwait</option>
    <option value="Lebanon">Lebanon</option>
    <option value="Libya">Libya</option>
    <option value="Mauritania">Mauritania</option>
    <option value="Morocco">Morocco</option>
    <option value="Oman">Oman</option>
    <option value="Palestine">Palestine</option>
    <option value="Qatar">Qatar</option>
    <option value="Saudi Arabia">Saudi Arabia</option>
    <option value="Somalia">Somalia</option>
    <option value="Sudan">Sudan</option>
    <option value="Syria">Syria</option>
    <option value="Tunisia">Tunisia</option>
    <option value="United Arab Emirates">United Arab Emirates</option>
    <option value="Yemen">Yemen</option>
    <option value="Afghanistan">Afghanistan</option>
    <option value="Armenia">Armenia</option>
    <option value="Azerbaijan">Azerbaijan</option>
    <option value="Bahrain">Bahrain</option>
    <option value="Bangladesh">Bangladesh</option>
    <option value="Bhutan">Bhutan</option>
    <option value="Brunei">Brunei</option>
    <option value="Cambodia">Cambodia</option>
    <option value="China">China</option>
    <option value="Cyprus">Cyprus</option>
    <option value="Georgia">Georgia</option>
    <option value="India">India</option>
    <option value="Indonesia">Indonesia</option>
    <option value="Iran">Iran</option>
    <option value="Iraq">Iraq</option>
    <option value="Israel">Israel</option>
    <option value="Japan">Japan</option>
    <option value="Jordan">Jordan</option>
    <option value="Kazakhstan">Kazakhstan</option>
    <option value="Kuwait">Kuwait</option>
    <option value="Kyrgyzstan">Kyrgyzstan</option>
    <option value="Laos">Laos</option>
    <option value="Lebanon">Lebanon</option>
    <option value="Malaysia">Malaysia</option>
    <option value="Maldives">Maldives</option>
    <option value="Mongolia">Mongolia</option>
    <option value="Myanmar (Burma)">Myanmar (Burma)</option>
    <option value="Nepal">Nepal</option>
    <option value="North Korea">North Korea</option>
    <option value="Oman">Oman</option>
    <option value="Pakistan">Pakistan</option>
    <option value="Palestine">Palestine</option>
    <option value="Philippines">Philippines</option>
    <option value="Qatar">Qatar</option>
    <option value="Saudi Arabia">Saudi Arabia</option>
    <option value="Singapore">Singapore</option>
    <option value="South Korea">South Korea</option>
    <option value="Sri Lanka">Sri Lanka</option>
    <option value="Syria">Syria</option>
    <option value="Tajikistan">Tajikistan</option>
    <option value="Thailand">Thailand</option>
    <option value="Timor-Leste">Timor-Leste</option>
    <option value="Turkey">Turkey</option>
    <option value="Turkmenistan">Turkmenistan</option>
    <option value="United Arab Emirates">United Arab Emirates</option>
    <option value="Uzbekistan">Uzbekistan</option>
    <option value="Vietnam">Vietnam</option>
    <option value="Yemen">Yemen</option>
    <option value="Canada">Canada</option>
    <option value="United States">United States</option>
    <option value="Mexico">Mexico</option>
    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
    <option value="Bahamas">Bahamas</option>
    <option value="Barbados">Barbados</option>
    <option value="Cuba">Cuba</option>
    <option value="Dominica">Dominica</option>
    <option value="Dominican Republic">Dominican Republic</option>
    <option value="Grenada">Grenada</option>
    <option value="Haiti">Haiti</option>
    <option value="Jamaica">Jamaica</option>
    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
    <option value="Saint Lucia">Saint Lucia</option>
    <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
    <option value="Argentina">Argentina</option>
    <option value="Bolivia">Bolivia</option>
    <option value="Brazil">Brazil</option>
    <option value="Chile">Chile</option>
    <option value="Colombia">Colombia</option>
    <option value="Ecuador">Ecuador</option>
    <option value="Guyana">Guyana</option>
    <option value="Paraguay">Paraguay</option>
    <option value="Peru">Peru</option>
    <option value="Suriname">Suriname</option>
    <option value="Uruguay">Uruguay</option>
    <option value="Venezuela">Venezuela</option>
    <option value="Andorra">Andorra</option>
    <option value="Austria">Austria</option>
    <option value="Belgium">Belgium</option>
    <option value="France">France</option>
    <option value="Germany">Germany</option>
    <option value="Liechtenstein">Liechtenstein</option>
    <option value="Luxembourg">Luxembourg</option>
    <option value="Monaco">Monaco</option>
    <option value="Netherlands">Netherlands</option>
    <option value="Switzerland">Switzerland</option>
    <option value="Albania">Albania</option>
    <option value="Andorra">Andorra</option>
    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
    <option value="Croatia">Croatia</option>
    <option value="Cyprus">Cyprus</option>
    <option value="Greece">Greece</option>
    <option value="Italy">Italy</option>
    <option value="Malta">Malta</option>
    <option value="Portugal">Portugal</option>
    <option value="San Marino">San Marino</option>
    <option value="Serbia">Serbia</option>
    <option value="Slovenia">Slovenia</option>
    <option value="Spain">Spain</option>
    <option value="Estonia">Estonia</option>
    <option value="Finland">Finland</option>
    <option value="Iceland">Iceland</option>
    <option value="Ireland">Ireland</option>
    <option value="Latvia">Latvia</option>
    <option value="Lithuania">Lithuania</option>
    <option value="Norway">Norway</option>
    <option value="Sweden">Sweden</option>
    <option value="Belarus">Belarus</option>
    <option value="Bulgaria">Bulgaria</option>
    <option value="Czech Republic">Czech Republic</option>
    <option value="Hungary">Hungary</option>
    <option value="Moldova">Moldova</option>
    <option value="Poland">Poland</option>
    <option value="Romania">Romania</option>
    <option value="Russia">Russia</option>
    <option value="Slovakia">Slovakia</option>
    <option value="Ukraine">Ukraine</option>
    <option value="Armenia">Armenia</option>
    <option value="Azerbaijan">Azerbaijan</option>
    <option value="Georgia"> Georgia</option>
  </select>
        </label>


          <label className="font-semibold">
            Passport Number
            <input
              type="text"
              name="passport"
              className="bg-purple-100 outline-purple-400   text-sm rounded-lg block w-full p-2.5 mt-2.5 font-normal"
              placeholder="Passport Number"
              required
              value={passport}
              onChange={(e) => setPassport(e.target.value)}
            />
          </label>
          

          <button
            type="submit"
            disabled={loading}
            className={`cursor-pointer bg-gradient-to-br ${loading?'bg-gray-800':'bg-gradient-to-br from-purple-400 to-purple-500  '}  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
          >
            {loading ? 'Sending...' : 'Sign Up'}
          </button>
        </form>
      </div>
  )
}

export default Registration
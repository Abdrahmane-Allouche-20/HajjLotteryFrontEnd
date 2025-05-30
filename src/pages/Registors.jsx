import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/Context';
import { NavLink } from 'react-router-dom'
function Registors() {
  const { registors, getAllRegistors,deleteRegistor } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      await getAllRegistors();
    };
    fetchData();
  }, []);

  return (
    <section className="relative flex flex-col lg:flex-row max-w-6xl mx-auto sm:p-16 pb-6 !pt-[120px] px-4 min-h-[calc(100vh-80px)]">
      <div className="flex flex-col lg:flex-row gap-4 bg-purple-600/20 backdrop-blur-lg  rounded-xl p-4 sm:p-6 w-full">
        
        {/* Sidebar */}
        <div className="w-full lg:w-[20%] border-b lg:border-b-0 lg:border-r-2 border-[#25204b] pb-4 lg:pb-0">
          <h1 className="text-[#25204b] font-black text-base sm:text-xl border-b-2 border-[#25204b] pb-1 w-fit">Dashboard</h1>
          <ul className="mt-6 text-white text-sm sm:text-base flex justify-center sm:justify-start sm:flex-col gap-4">
    <li className="font-black"><NavLink to={'/Admin'}>States</NavLink></li>
    <li className="font-black"><NavLink to={'/Admin/users'}>Users</NavLink></li>
    <li className="font-black text-[#25204b]"><NavLink to={'/Admin/registers'}>Registers</NavLink></li>
  </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-x-auto">
          <h1 className="text-[#25204b] font-black mb-4 text-base sm:text-xl text-left ">Registors</h1>

          <div className="min-w-[600px] sm:min-w-full">
            <table className="w-full rounded-lg overflow-hidden bg-white/40 backdrop-blur-lg">
              <thead className="bg-white/60">
                <tr>
                  <th className=" p-2 text-center text-xs sm:text-lg font-bold">Full Name</th>
                  <th className=" p-2 text-center text-xs sm:text-lg font-bold">Passport</th>
                  <th className=" p-2 text-center text-xs sm:text-lg font-bold">Birthdate</th>
                  <th className=" p-2 text-center text-xs sm:text-lg font-bold">Email</th>
                  <th className=" p-2 text-center text-xs sm:text-lg font-bold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-900">
                {registors && registors.length > 0 ? (
                  registors.map((person, index) => (
                    <tr key={index} className="hover:bg-purple-200/30">
                      <td className="font-semibold text-xs sm:text-base p-2 tracking-wide">{person.firstname} {person.lastname}</td>
                      <td className="font-semibold text-xs sm:text-base p-2 tracking-wide">{person.passport}</td>
                      <td className="font-semibold text-xs sm:text-base p-2 tracking-wide">{new Date(person.birthdate).toLocaleDateString()}</td>
                      <td className="font-semibold text-xs sm:text-base p-2 tracking-wide">{person.email}</td>
                      <td className=" p-2">
                       <button className='px-3 py-1 sm:text-base text-xs text-white cursor-pointer bg-red-500 rounded-lg' onClick={()=>deleteRegistor(person._id)}>delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-6 text-[#25204b] font-semibold">No registrants found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registors;

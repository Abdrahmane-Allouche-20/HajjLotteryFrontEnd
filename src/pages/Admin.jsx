import { paper, user } from '../assets/icons/index';
import { NavLink } from 'react-router-dom'
import React, { useContext ,useEffect} from 'react';
import { AppContext } from '../context/Context';

const Dashboard = () => {
  const { countUsers,countRegistores,getAllRegistors,getAllUsers } = useContext(AppContext);
 
    useEffect(() => {
          const fetchData = async () => {
            await getAllUsers();
            await getAllRegistors();
          };
          fetchData();
        }, []);
  const Value = [
    {
      title: 'Total Logins:',
      value: countUsers,
      icon: user,
    },
    {
      title: 'Total Applicants:',
      value: countRegistores,
      icon: paper,
    },
  ];

  return (
 <section className="relative flex lg:flex-row flex-col max-w-6xl mx-auto sm:p-16 pb-6 !pt-[120px] px-8 min-h-[calc(100vh-80px)]">
      <div className="flex flex-col lg:flex-row gap-4 bg-green-400/10 backdrop-blur-lg border border-green-200/20 rounded-xl p-4 sm:p-6 w-full">

          {/* Sidebar */}
          <div className="w-full lg:w-[20%] border-b lg:border-b-0 lg:border-r-2 border-white pb-4 lg:pb-0">
              <h1 className="text-white font-black text-base sm:text-xl border-b-2 border-white pb-1 w-fit">Dashboard</h1>
              <ul className="mt-6 text-white text-sm sm:text-base flex justify-center sm:justify-start sm:flex-col gap-4">
                  <li className="font-black text-green-600"><NavLink to={'/Admin'}>States</NavLink></li>
                  <li className="font-black "><NavLink to={'/Admin/users'}>Users</NavLink></li>
                  <li className=" font-black"><NavLink to={'/Admin/registers'}>Registers</NavLink></li>
              </ul>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-x-auto">
              <h1 className="text-white font-black mb-4 text-base sm:text-xl text-left ">Admin</h1>

              <div className="grid sm:grid-cols-2 gap-3 mt-6">
            {Value.map((item, index) => (
              <div
                key={index}
                className="   flex flex-col bg-white/30 backdrop-blur-lg border border-green-200/20 rounded-xl p-3 sm:p-6 justify-center items-center cursor-pointer "
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  loading="lazy"
                  width={75}
                  height={75}
                  className='sm:w-[75px] w-[30px]'
                />
                <div className="mt-1 sm:mt-4 text-center">
                  <h1 className=" font-bold sm:text-base text-xs">{item.title}</h1>
                  <h2 className="font-bold text-sm sm:text-xl text-white">{item.value}</h2>
                </div>
              </div>
            ))}
          </div>
          </div>
      </div>
  </section>
  );
};

export default Dashboard;

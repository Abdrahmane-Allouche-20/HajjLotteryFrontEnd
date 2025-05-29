import  { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { moon } from '../assets/icons'
import { motion, AnimatePresence } from 'framer-motion'
import { AppContext } from '../context/Context'
import { Menu, X } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useContext(AppContext)

  
  const userProfile = (
    
      <NavLink
        className="flex items-center gap-2 cursor-pointer"
        to='/profile'
      >
        <img
          src={
            user?.profileImage?.url
          }
          alt="Profile"
          className="w-9 h-9 rounded-full object-cover border-2 border-white"
        />
        
        
      </NavLink>
     
   
  );

  const navLinks = (
    <>
      {user ?
        <>
        <NavLink
            onClick={() => setIsOpen(false)}
            to="/About"

            className={({ isActive }) =>
              `${isActive ? "text-black  translate-x-3 md:translate-x-0 md:-translate-y-2" : "text-white  md:hover:-translate-x-0 hover:translate-x-3 md:hover:-translate-y-1"} 
    transform duration-300  flex items-center gap-3 `
            }
          >

            About
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            to='/Contact'
            className={({ isActive }) =>
              `${isActive ? "text-black  translate-x-3 md:translate-x-0 md:-translate-y-2" : "text-white  md:hover:-translate-x-0 hover:translate-x-3 md:hover:-translate-y-1"}
  transform duration-300  flex items-center gap-3`
            }>

            Contact
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            to="/hejj_registration"

            className={({ isActive }) =>
              `${isActive ? "text-black  translate-x-3 md:translate-x-0 md:-translate-y-2" : "text-white  md:hover:-translate-x-0 hover:translate-x-3 md:hover:-translate-y-1"} 
  transform duration-300  flex items-center gap-3 `
            }
          >

            Hajj Registration
          </NavLink>
          

          {user.isAdmine &&
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/Admin"

              className={({ isActive }) =>
                `${isActive ? "text-black  translate-x-3 md:translate-x-0 md:-translate-y-2" : "text-white  md:hover:-translate-x-0 hover:translate-x-3 md:hover:-translate-y-1"} 
        transform duration-300  flex items-center gap-3 `
              }
            >

              Admin
            </NavLink>}
          {/* Replace logout button with user profile dropdown */}
          <div className="ml-2">{userProfile}</div>
        </>
        :
        <>
          <NavLink
            onClick={() => setIsOpen(false)}
            to="/About"

            className={({ isActive }) =>
              `${isActive ? "text-black  translate-x-3 md:translate-x-0 md:-translate-y-2" : "text-white  md:hover:-translate-x-0 hover:translate-x-3 md:hover:-translate-y-1"} 
    transform duration-300  flex items-center gap-3 `
            }
          >

            About
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            to="/Login"

            className={({ isActive }) =>
              `${isActive ? "text-black  translate-x-3 md:translate-x-0 md:-translate-y-2" : "text-white  md:hover:-translate-x-0 hover:translate-x-3 md:hover:-translate-y-1"} 
        transform duration-300  flex items-center gap-3 `
            }
          >

            Login
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            to="/Register"

            className={({ isActive }) =>
              `${isActive ? "text-black  translate-x-3 md:translate-x-0 md:-translate-y-2" : "text-white  md:hover:-translate-x-0 hover:translate-x-3 md:hover:-translate-y-1"} 
      transform duration-300  flex items-center gap-3 `
            }
          >

            Register
          </NavLink>
        </>
      }







    </>
  )


  return (
    <header className='absolute top-0 left-0 right-0 z-50 bg-transparent max-w-5xl mx-auto px-4 sm:px-16 py-4'>
      <div className='flex justify-between items-center'>
        <NavLink to='/'>
          <img
            src={moon}
            alt='moon SVG'
            className='w-7 md:w-8'
            width={32}
            height={32}
            loading='lazy'
          />        </NavLink>

        {/*Desktop nav */}
        <nav className='hidden md:flex text-lg gap-7 font-medium'>
          {navLinks}
        </nav>


        <div className='md:hidden mt-1 '>
          <button onClick={() => setIsOpen(prev => !prev)}>
            {isOpen ? <X className='text-white' /> : <Menu className='text-white' />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav

            className='md:hidden mt-4 flex flex-col gap-4 text-lg font-medium glass p-4 rounded-lg shadow-lg'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header

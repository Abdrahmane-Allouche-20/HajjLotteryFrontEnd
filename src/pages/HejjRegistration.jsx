import  { useContext } from 'react'
import { AppContext } from '../context/Context'
import {waiting} from '../assets/icons/index'
import Registration from '../components/Registration'
function HejjRegistration() {
  const {singleRegister}=useContext(AppContext)
  

  

  return (
    <section className="relative flex lg:flex-row flex-col max-w-5xl mx-auto sm:p-16 pb-6 !pt-[126px] px-8 min-h-[calc(100vh-80px)]">
      {singleRegister?
    

      <div className='flex justify-center flex-col gap-3 items-center max-w-6xl mx-auto h-[40vh]'>
        <p className='sm:text-3xl text-lg font-bold '>
          You have already registered.
          Your result will appear here soon.
        </p>
        <img src={waiting} className=' w-[100px]' loading='lazy' alt="" />
        </div>:<Registration/>
  
      
      }
    </section>
  )
}

export default HejjRegistration

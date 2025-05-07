import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import {useContext} from 'react'
import { AppContext } from "../context/Context";
const HomeInfo = ({ currentStage }) => {
 const {user}=useContext(AppContext)

  if (currentStage === 1){
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
🕋 السلام عليكم ورحمة الله وبركاته <br />
هذا الموقع مخصص لقرعة الحج المباركة.
        </h1>
    );
  }
  if(user){
    if (currentStage === 2) {
      return (
        <div className=' mx-5 relative flex text-white flex-col gap-3 max-w-2xl neo-brutalism-blue pt-4 pb-12 px-8'>
        <p className='font-medium sm:text-xl text-center'>
        💬 If you have any questions or suggestions, feel free to contact us.
        
        </p>
  
        <Link to='/contact' className='neo-brutalism-white py-3 px-6 rounded-lg text-blue-500 text-center font-semibold sm:w-1/2 w-[90%] -bottom-5 absolute mx-auto right-0 left-0 flex justify-center items-center gap-3'>
          Let's talk
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
      );
    }
    if (currentStage === 4) {
      return (
        <div className=' mx-5 relative flex text-white flex-col gap-3 max-w-2xl neo-brutalism-blue pt-4 pb-12 px-8'>
        <p className='font-medium sm:text-xl text-center'>
        Answer the call of Hajj 🕋
        </p>
  
        <Link to='/hejj_registration' className='neo-brutalism-white py-3 px-6 rounded-lg text-blue-500 text-center font-semibold sm:w-fit w-[90%] -bottom-5 absolute mx-auto right-0 left-0 flex justify-center items-center gap-3'>
        register now
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
      );
    }
  }else{
    if (currentStage === 2) {
      return (
        <div className=' mx-5 relative flex text-white flex-col gap-3 max-w-2xl neo-brutalism-blue pt-4 pb-12 px-8'>
        <p className='font-medium sm:text-xl text-center'>
        💬 Don't have an account? Join us today!.
        
        </p>
  
        <Link to='/Register' className='neo-brutalism-white py-3 px-6 rounded-lg text-blue-500 text-center font-semibold sm:w-1/2 w-[90%] -bottom-5 absolute mx-auto right-0 left-0 flex justify-center items-center gap-3'>
          Let's talk
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
      );
    }
    if (currentStage === 4) {
      return (
        <div className=' mx-5 relative flex text-white flex-col gap-3 max-w-2xl neo-brutalism-blue pt-4 pb-12 px-8'>
        <p className='font-medium sm:text-xl text-center'>
         if you have an account login 🕋
        </p>
  
        <Link to='/Login' className='neo-brutalism-white py-3 px-6 rounded-lg text-blue-500 text-center font-semibold sm:w-fit w-[90%] -bottom-5 absolute mx-auto right-0 left-0 flex justify-center items-center gap-3'>
        Login 
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
      );
    }
  }

  if (currentStage === 3) {
    return (
      <div className=' mx-5 relative flex text-white flex-col gap-3 max-w-2xl neo-brutalism-blue pt-4 pb-12 px-8'>
      <p className='font-medium sm:text-xl text-center'>
      Curious about Hajj? Learn the rituals, steps, and deep spiritual meanings behind this sacred journey.
      </p>

      <Link to='/About' className='neo-brutalism-white py-3 px-6 rounded-lg text-blue-500 text-center font-semibold sm:w-fit w-[90%] -bottom-5 absolute mx-auto right-0 left-0 flex justify-center items-center gap-3'>
      Learn more about Hajj
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }
 
  
  return null;
};

export default HomeInfo;
import { Canvas } from "@react-three/fiber";
import { Suspense, useState,useRef,useEffect  } from "react";
import Loader from "../components/Loader";
import Meccah from "../models/Meccah";
import Sky from '../models/Sky'
import Hedj from '../assets/hedj.mp3'
import { SoundOff,SoundOn } from "../assets/icons";
import HomeInfo from "../components/HomeInfo";
const Home = () => {

  const audioRef = useRef(new Audio(Hedj))
  audioRef.current.volume = 0.4;
  audioRef.current.loop = 0.4;
  const [isRotating, setIsRotating] = useState(false)
  
  const [CurrentStage, setCurrentStage] = useState(1)
const [isPlayingMusic, setIsPlayingMusic] = useState(false)

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play()
    }
    return () => {
      audioRef.current.pause()
    }
  }, [isPlayingMusic])

  return (
    <section className='w-full h-screen relative'>
       <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center">
        {CurrentStage && <HomeInfo currentStage={CurrentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
        <directionalLight position={[1, 1, 1]} intensity={0} />
          <ambientLight intensity={0} />
          <pointLight position={[10, 5, 10]} intensity={0} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />
          <Sky isRotating={isRotating}/>
         <Meccah
          position={[0, -6.5, -43]}
          scale={[8,8,8]}
          rotation={[0.1, 4.7, 0]}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
           />
        </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? SoundOff : SoundOn}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10  cursor-pointer object-contain'
        />
      </div>
    </section>
  );
};

export default Home;
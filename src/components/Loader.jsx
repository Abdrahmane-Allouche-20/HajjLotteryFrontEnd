import { Html } from '@react-three/drei';

function Loader() {
  return (
    <Html>
      <div className="fixed top-0 left-0 flex justify-center items-center w-full  bg-white">
        <div className="p-1 bg-gradient-to-r from-blue-700 via-sky-500 to-sky-300 rounded-full animate-spin">
          <div className="w-20 h-20 bg-white rounded-full" />
        </div>
      </div>
    </Html>
  );
}

export default Loader;

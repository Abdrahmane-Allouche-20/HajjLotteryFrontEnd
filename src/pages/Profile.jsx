import  { useContext, useState } from 'react';
import { AppContext } from '../context/Context';

function Profile() {
  const { user, handleDeleteAccount,logout, handleImageUpload, loading } = useContext(AppContext);
  const [preview, setPreview] = useState(null);

  const [image, setImage] = useState(null);
const [error,setError]=useState('')

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdatePicture = async (e) => {
    e.preventDefault();
    try {
        if(!image)return
        const formData = new FormData();
        formData.append('profileImage', image);
        await handleImageUpload(formData)
        window.toast && window.toast.success('Profile picture updated!');
    } catch (error) {
        setError(error.message||'Failed to update profile picture')
    }
    
    
  
    
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      handleDeleteAccount(user._id);
    }
  };

  return (
 <section className="relative  max-w-3xl mx-auto sm:p-16 pb-6 !pt-[126px] px-8 min-h-[calc(100vh-80px)]">
    <div className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
        {error && <span className='text-red-500 text-center'>{error}</span>}
      <div className="relative mb-4">
        <img
          src={preview?preview:user?.profileImage?.url}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-orange-400"
        />
        <label htmlFor="profileImage" className="absolute bottom-1 right-0 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-orange-600 transition">
          <span className="text-xl">+</span>
          <input
            id="profileImage"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
      </div>
      <form onSubmit={handleUpdatePicture} className="mb-6">
        <button
          type="submit"
          disabled={loading || !image}
          className="bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition disabled:opacity-50"
        >
          Update Picture
        </button>
      </form>
      <div className="w-full text-center">
        <h2 className="text-2xl font-semibold mb-2">{user?.username}</h2>
        <p className="text-gray-600 mb-4">{user?.email}</p>
        <div className='flex justify-center gap-5 items-center'>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Delete Account
        </button>
         <button
          onClick={logout}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Log Out
        </button>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Profile;
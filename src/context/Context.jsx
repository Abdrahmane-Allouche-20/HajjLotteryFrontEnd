import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../axios';
import {  toast } from 'react-toastify';
window.toast = toast;

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [registors, setRegistors] = useState([]);
  const [user, setUser] = useState(null);
  const [users,setUsers] = useState([]);
  const [countUsers,setCountUsers] = useState(0)
  const [countRegistores,setCountRegistores] = useState(0)
  const [singleRegister,setSingleRegister]=useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem('user');
      }
    }
  }, []);

  const HandleRegister = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post('user/register', data, );
      setError('');
      if (response.status === 201) {
        localStorage.setItem('token', response.data.token);
    
      
        setTimeout(() => {
  navigate('/Login');
}, 1500); // Wait for toast to show before redirect

      }
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed');
     
    } finally {
      setLoading(false);
    }
  };
  const handleImageUpload = async (formData) => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.post('/user/picture', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      const updatedUser = response.data.user;  // get updated user from backend

      // Update React state and localStorage
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));

      return { success: true };
    } else {
      throw new Error('Image upload failed');
    }
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || error.message || 'Image upload failed',
    };
  }
  };
  const handleDeleteAccount=async(id)=>{
 
    const token = localStorage.getItem('token');
  
    try {
      const response = await axios.delete(`/user/deleteAcc/${id}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
  
      if (response?.status===200) {
       logout()
        setError('');
      }
    } catch (error) {
      setError(error?.response?.data?.message || 'Failed to Delete user');
    } finally {
      setLoading(false);
    }
 
  }
  const HandleLogin = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post('user/login', data);
      if (response.status === 200) {
        const userData = response.data.user;
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('token', response.data.token);
        setUser(userData);
        setError('');
        window.toast &&
          window.toast.success('✅ Logged in successfully!', {
            position: 'top-right',
            autoClose: 3000,
          });
          setTimeout(()=>{
             navigate('/');
          },1500)
       
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
      window.toast &&
        window.toast.error(
          `❌ ${error.response?.data?.message || 'Login failed'}`,
          {
            position: 'top-right',
            autoClose: 1500,
          }
        );
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    navigate('/Login');
  };
  const addRegistor = async (data) => {
  setLoading(true);
  const token = localStorage.getItem('token');

  if (!token || token.split('.').length !== 3) {
    setError('Invalid or missing authentication token');
    setLoading(false);
    return;
  }

  try {
    const response = await axios.post('/hajj', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setError('');
    if (response.status === 201) {
      window.toast &&
        window.toast.success('✅ Registered successfully!', {
          position: 'top-right',
          autoClose: 2000,
        });
      navigate('/About');
    }
  } catch (error) {
    let msg =
      error?.response?.data?.error ||
      'Failed to register';

    // Handle MongoDB duplicate key error
    if (
      error?.response?.data?.error &&
      error.response.data.error.includes('E11000')
    ) {
      if (error.response.data.error.includes('phone')) {
        msg = 'This phone number is already registered.';
      } else if (error.response.data.error.includes('email')) {
        msg = 'This email is already registered.';
      } else {
        msg = 'Duplicate entry. Please use unique values.';
      }
    }

    setError(msg);
    window.toast &&
      window.toast.error(`❌ ${msg}`, {
        position: 'top-right',
        autoClose: 2000,
      });
  } finally {
    setLoading(false);
  }
  };
  
  const getAllRegistors = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/hajj');
     
      if (response?.data) {
        setRegistors(response.data.registers);
        setCountRegistores(response.data.registers.length);
        setError('');
      }
    } catch (error) {
      setError(error?.response?.data?.message || 'Failed to fetch registrants');
    } finally {
      setLoading(false);
    }
  }
  const getAllUsers = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get('/user/allUsers', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
  
      if (response?.data) {
        setUsers(response.data.users);
        setCountUsers(response.data.users.length);
        setError('');
      }
    } catch (error) {
      setError(error?.response?.data?.message || 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };
  const deleteRegistor=async(id)=>{
    const token = localStorage.getItem('token');
  
    try {
      const response = await axios.delete(`/hajj/${id}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
  
      if (response?.status===200) {
        getAllRegistors()
        setError('');
      }
    } catch (error) {
      setError(error?.response?.data?.message || 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  }
  const deleteuser=async(id)=>{
    const token = localStorage.getItem('token');
  
    try {
      const response = await axios.delete(`/user/deleteuser/${id}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
  
      if (response?.status===200) {
        getAllUsers()
        setError('');
      }
    } catch (error) {
      setError(error?.response?.data?.message || 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  }
  const handleSingleRegister = async (id) => {
  setLoading(true);
  try {
    const response = await axios.get(`/hajj/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 200 ) {
      
      setSingleRegister(response?.data?.found);
     
      setError('');
    } else {
      setError('No register data found.');
    }
  } catch (error) {
    setError(
      error?.response?.data?.message || 'Failed to fetch registration'
    );
    console.error('Fetch error:', error);
  } finally {
    setLoading(false);
  }
};


  return (
    <AppContext.Provider
      value={{
        user,
        logout,
        loading,
        error,
        setError,
        HandleRegister,
        HandleLogin,
        addRegistor,
        getAllRegistors,
        registors,
        getAllUsers,
        users,
        countUsers,
        countRegistores,
        deleteRegistor,
        deleteuser,
        handleImageUpload,
        handleDeleteAccount,
        handleSingleRegister,
        singleRegister
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../axios';

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [registors, setRegistors] = useState([]);
  const [user, setUser] = useState(null);
  const [users,setUsers]= useState([]);
  const [countUsers,setCountUsers]=useState(0)
  const [countRegistores,setCountRegistores]=useState(0)
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
      const response = await axios.post('user/register', data);
      setError('');
      if (response.status === 201) {
        localStorage.setItem('token', response.data.token);
        navigate('/Login');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

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
        navigate('/');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
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
        navigate('/About');
      }
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.message || 'Failed to register');
    } finally {
      setLoading(false);
    }
  };
  
  const getAllRegistors = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/hajj');
      console.log(response)
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
  };
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
  

  return (
    <AppContext.Provider
      value={{
        user,
        logout,
        loading,
        error,
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
        deleteuser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

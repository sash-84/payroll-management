import React, { useState } from 'react';
import axios from 'axios';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const [showPasswords, setShowPasswords] = useState({
    password: false
  });

  const toggleVisibility = (field) => {
    setShowPasswords((prevState) => ({
      ...prevState,
      [field]: !prevState[field]
    }));
  };

  const changeUsername = (event) => {
    setUsername(event.target.value); 
  };

  const changePassword = (event) => {
    setPassword(event.target.value); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password
      });
      
      if (response.data) {
        const { userId, isAdmin } = response.data;
        localStorage.setItem('userId', userId); 
        localStorage.setItem('isAdmin', isAdmin); 
        
        alert(response.data.message);
        
        if (isAdmin) {
          window.location.href = '/admin-dashboard'; 
        } else {
          window.location.href = '/employee-dashboard';
        }
      }
    } catch (error) {
      setError('Invalid username or password');
    }
  };
  

  return (
    <section className="text-gray-600 body-font relative bg-white">
      <div className="w-2/3 md:w-1/3 container px-5 py-20 mx-auto flex flex-wrap">
        <h2 className="text-black text-lg mb-1 font-medium title-font">Log In</h2>
        <form className="flex flex-col md:ml-auto w-full md:py-8 mt-5 md:mt-0" onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Username<sup className='text-red-500'>*</sup></label>
            <input type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8"
              required
              value={username}
              onChange={changeUsername}
            />
          </div>
          <div className="relative mb-10">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password<sup className='text-red-500'>*</sup></label>
            <div className='flex pr-3 border border-gray-300 rounded bg-white'>
              <input
                type={showPasswords.password ? "text" : "password"}
                id="password"
                name="password"
                className="w-full rounded text-base outline-none text-gray-700 bg-white py-1 px-3 leading-8"
                required
                value={password}
                onChange={changePassword}
              />
              {showPasswords.password ? (
                <IoEyeOffOutline className='text-red-500 mt-1 h-[2.5rem] w-[1.3rem] cursor-pointer' onClick={() => toggleVisibility('password')} />
              ) : (
                <IoEyeOutline className='text-indigo-500 mt-1 h-[2.5rem] w-[1.3rem] cursor-pointer' onClick={() => toggleVisibility('password')} />
              )}
            </div>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Log In</button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>} 
        </form>
      </div>
    </section>
  );
};

export default LoginForm;

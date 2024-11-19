import React, { useState } from 'react';
import { FaPhone, FaLock } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { login } from '../../services/authService';

const LoginForm = ({ closePopup }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!phone || !password) {
      setErrorMessage('Please enter phone and password.');
      toast.error('Please enter phone and password.');
      return;
    }
    try {
      await login({ phone, password });
      toast.success('Login successful!');
      closePopup();
    } catch (error) {
      setErrorMessage(error.message);
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="flex items-center border-b border-white mb-6">
        <FaPhone className="text-white mr-3" />
        <input
          type="text"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 py-2"
        />
      </div>
      <div className="flex items-center border-b border-white mb-6">
        <FaLock className="text-white mr-3" />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 py-2"
        />
      </div>
      {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md"
      >
        Log In
      </button>
    </>
  );
};

export default LoginForm;

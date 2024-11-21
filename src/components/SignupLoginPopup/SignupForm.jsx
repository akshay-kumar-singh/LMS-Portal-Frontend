import React, { useState, useEffect } from 'react';
import { FaPhone, FaLock, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendOTP, verifyOTP } from '../../services/authService';

const SignupForm = ({ closePopup }) => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    let interval;
    if (step === 2 && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0) {
      setIsResendDisabled(false);
    }
    return () => clearInterval(interval);
  }, [timer, step]);

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return passwordRegex.test(password);
  };
  

  const handleSignupStepOne = async (e) => {
    e.preventDefault();
    if (!name || !phone) {
      setErrorMessage('Please enter your name and phone number.');
      return;
    }
    try {
      await sendOTP(phone);
      toast.success('OTP sent successfully!');
      setStep(2);
      setTimer(30);
      setIsResendDisabled(true);
    } catch (error) {
      setErrorMessage(error.message);
      toast.error(error.message);
    }
  };

  const handleResendOTP = async () => {
    setIsResendDisabled(true);
    try {
      await sendOTP(phone);
      toast.success('OTP resent successfully!');
      setTimer(30);
    } catch (error) {
      setErrorMessage(error.message);
      toast.error(error.message);
    }
  };

  const handleVerifySignup = async (e) => {
    e.preventDefault();
    if (!otp || !password || !confirmPassword || !name || !phone) {
      setErrorMessage('All fields are required.');
      toast.error('All fields are required.');
      return;
    }
    if (!validatePassword(password)) {
      setErrorMessage(
        'Password must be at least 8 characters long, include one uppercase letter, one number, and one special character.'
      );
      toast.error(
        'Password must be at least 8 characters long, include one uppercase letter, one number, and one special character.'
      );
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      toast.error('Passwords do not match.');
      return;
    }
    try {
      await verifyOTP({ phone, otp, name, password, confirmPassword });
      toast.success('Signup successful! Welcome to the platform.');
      closePopup();
    } catch (error) {
      setErrorMessage(error.message);
      toast.error(error.message);
    }
  };

  return (
    <>
      {step === 1 && (
        <>
          <div className="flex items-center border-b border-white mb-6">
            <FaUser className="text-white mr-3" />
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 py-2"
            />
          </div>
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
          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
          <button
            onClick={handleSignupStepOne}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md"
          >
            Send OTP
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <div className="flex items-center border-b border-white mb-6">
            <FaLock className="text-white mr-3" />
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 py-2"
            />
          </div>
          <div className="flex items-center border-b border-white mb-6">
            <FaLock className="text-white mr-3" />
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 py-2"
            />
          </div>
          <div className="flex items-center border-b border-white mb-6">
            <FaLock className="text-white mr-3" />
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 py-2"
            />
          </div>
          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
          <button
            onClick={handleVerifySignup}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md"
          >
            Verify & Sign Up
          </button>
          {isResendDisabled ? (
            <p className="text-white text-center mt-4">Resend OTP in {timer}s</p>
          ) : (
            <button
              onClick={handleResendOTP}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md mt-4"
            >
              Resend OTP
            </button>
          )}
        </>
      )}
    </>
  );
};

export default SignupForm;

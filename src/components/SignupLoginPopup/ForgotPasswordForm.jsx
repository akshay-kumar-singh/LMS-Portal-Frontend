import React, { useState } from 'react';
import { sendForgotPasswordOtp, resetPassword } from '../../services/authService';
import { toast } from 'react-toastify';
import { FaPhone, FaLock } from 'react-icons/fa';

const ForgotPasswordForm = ({ closePopup }) => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSendOtp = async () => {
    try {
      await sendForgotPasswordOtp({ phone });
      toast.success('OTP sent to your phone');
      setStep(2);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }
  
    try {
      await resetPassword({
        phone,
        otp,
        newPassword,
        confirmPassword,  
      });
  
      toast.success('Password reset successful!');
      closePopup();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {step === 1 && (
        <div>
          <h3 className="text-left text-white mb-4 text-lg font-semibold">Reset Password</h3>
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
          <button
            onClick={handleSendOtp}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md"
          >
            Send OTP
          </button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h3 className="text-left text-white mb-4 text-lg font-semibold">Reset Password</h3>
          <div className="flex items-center border-b border-white mb-6">
            <FaLock className="text-white mr-3" />
            <input
              type="text"
              placeholder="Enter OTP sent to your phone"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 py-2"
            />
          </div>
          <div className="flex items-center border-b border-white mb-6">
            <FaLock className="text-white mr-3" />
            <input
              type="password"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 py-2"
            />
          </div>
          <div className="flex items-center border-b border-white mb-6">
            <FaLock className="text-white mr-3" />
            <input
              type="password"
              placeholder="Confirm your new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 py-2"
            />
          </div>
          <button
            onClick={handleResetPassword}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md"
          >
            Reset Password
          </button>
        </div>
      )}
    </>
  );
};

export default ForgotPasswordForm;

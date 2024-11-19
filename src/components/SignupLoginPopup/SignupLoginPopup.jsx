import React, { useState, useEffect } from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import ForgotPasswordForm from './ForgotPasswordForm';

const SignupLoginPopup = ({ isOpen, closePopup }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsSignup(false);
      setIsForgotPassword(false);
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsSignup(!isSignup);
    setIsForgotPassword(false);
  };

  const startForgotPassword = () => {
    setIsForgotPassword(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-12 rounded-lg shadow-lg w-[500px]">
        <div className="flex justify-between items-center mb-6 text-white">
          <h2 className="text-2xl font-semibold">
            {isSignup ? 'Sign Up' : isForgotPassword ? 'Forgot Password' : 'Log In'}
          </h2>
          <button onClick={closePopup} className="text-2xl font-bold hover:text-gray-300">
            X
          </button>
        </div>

        {isForgotPassword ? (
          <ForgotPasswordForm closePopup={closePopup} />
        ) : isSignup ? (
          <SignupForm closePopup={closePopup} />
        ) : (
          <LoginForm closePopup={closePopup} startForgotPassword={startForgotPassword} />
        )}

        {!isForgotPassword && (
          <div className="text-center mt-4">
            <p className="text-white">
              {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button onClick={handleToggle} className="text-green-400 underline">
                {isSignup ? 'Log In' : 'Sign Up'}
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupLoginPopup;
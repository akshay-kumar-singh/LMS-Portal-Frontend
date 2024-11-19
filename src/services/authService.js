import api from './api';

// Sends OTP to a phone number
export const sendOTP = async (phone) => {
  try {
    const response = await api.post('/send-otp', { phone });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Verifies OTP for signup
export const verifyOTP = async ({ phone, otp, name, password, confirmPassword }) => {
  try {
    const response = await api.post('/verify-otp', {
      phone,
      otp,
      name,
      password,
      confirmPassword,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Logs in the user
export const login = async ({ phone, password }) => {
  try {
    const response = await api.post('/login', { phone, password });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

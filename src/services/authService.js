import api from './api';
import { jwtDecode } from 'jwt-decode';

export const sendOTP = async (phone) => {
  try {
    const response = await api.post('/send-otp', { phone });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

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

export const login = async ({ phone, password }) => {
  try {
    const response = await api.post('/login', { phone, password });
    const {token} = response.data;

    //save the token in localstorage
    localStorage.setItem('token', token);

    //decode token to get role information
    const decodeToken = jwtDecode(token);
    return decodeToken;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const sendForgotPasswordOtp = async ({ phone }) => {
  try {
    const response = await api.post('/forgot-password/send-otp', { phone });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error sending OTP');
  }
};


export const resetPassword = async ({ phone, otp, newPassword, confirmPassword }) => {
  try {
    const response = await api.post('/forgot-password/reset', { phone, otp, newPassword, confirmPassword });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
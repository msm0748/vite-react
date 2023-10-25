import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axios';

export const registerUser = createAsyncThunk('user/registerUser', async (body, thunkAPI) => {
  try {
    const response = await axiosInstance.post('/users/register', body);
    return response.data;
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue(err.response.data || err.message);
  }
});
export const loginUser = createAsyncThunk('user/loginUser', async (body, thunkAPI) => {
  try {
    const response = await axiosInstance.post('/users/login', body);
    return response.data;
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue(err.response.data || err.message);
  }
});

import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
import { toast } from "react-toastify";

// login action
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("auth/login", { role, email, password });
      //store token
      if (data.success) {
        localStorage.setItem("token", data.token);
        toast.success(data.email);
        window.location.replace('/');
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// register action

export const userRegister = createAsyncThunk(
  "auth/regster",
  async ({
    name,
    role,
    email,
    password,
    organization,
    hospital,
    website,
    address,
    phone,
  },{rejectWithValue}) => {
    try {
      const {data} = await API.post('auth/register',{   name,
        role,
        email,
        password,
        organization,
        hospital,
        website,
        address,
        phone})
        if(data.success){ 
          toast.success(data.message)
          window.location.replace('/login');
        }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


// currect user

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async({rejectWithValue}) =>{
   try {
    const res = await API.get('/auth/current-user')
    if(res?.data){
      return res?.data
    }
   } catch (error) {
    console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
   }
  }
)
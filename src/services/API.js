import axios from 'axios';


const API = axios.create({baseURL:process.env.REACT_APP_BASEURL});

API.interceptors.request((req)=>{
   if(localStorage.getItem('token')){
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
   }
   return req;

})


export default API;
import axios from 'axios';


const URL = "https://qua-giang-app.herokuapp.com";

export const fetchPosts = (payload) => axios.post(`${URL}/posts`, payload);
export const createPost = (payload) => axios.post(`${URL}/posts/new`, payload);
export const updatePost = (payload) => axios.post(`${URL}/posts/update`, payload);
export const deletePost = (payload) => axios.post(`${URL}/posts/delete`, payload);
export const getMe = (payload) => axios.post(`${URL}/user`, payload);
export const getMessage = (payload) => axios.post(`${URL}/chat`, payload);
export const newMessage = (payload) => axios.post(`${URL}/chat/new`, payload);

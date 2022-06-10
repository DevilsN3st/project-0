import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})


export const fetchPosts = () => axios.get('/posts');
export const createPost = (newPost) => axios.post('/posts', newPost);
export const likePost = (id) => axios.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`/posts/${id}`);

export const signIn = (FormData) => API.post('/users/signin', FormData);
export const signUp = (FormData) => API.post('/users/signup', FormData);
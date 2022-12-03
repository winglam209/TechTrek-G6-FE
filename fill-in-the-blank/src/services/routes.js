import axios from 'axios';

// export const uri = "http://localhost:4000"
export const uri = "http://127.0.0.1:4000"

export const tokenAPI = axios.create({
  baseURL: uri,
  headers: {
    "Content-Type": "application/json",
  },
});


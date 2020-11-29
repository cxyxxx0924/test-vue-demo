import axios from "axios";

export function getCourses() {
  return axios.get('/api/courses').then(res => res.data);
}
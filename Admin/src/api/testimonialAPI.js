import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/admin/testimonials';

export const fetchAllTestimonials = () => axios.get(BASE_URL);
export const approveTestimonial = (id) => axios.put(`${BASE_URL}/approve/${id}`);
export const rejectTestimonial = (id) => axios.put(`${BASE_URL}/reject/${id}`);
export const deleteTestimonial = (id) => axios.delete(`${BASE_URL}/${id}`);
export const toggleActive = (id) => axios.put(`${BASE_URL}/toggle/${id}`);

// api/testimonialAPI.js
const API_BASE_URL = 'http://localhost:5000/api';

// Helper function to handle API requests
const apiRequest = async (url, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }
    
    return response;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// Get all approved testimonials (for public display)
export const getApprovedTestimonials = async () => {
  try {
    const response = await apiRequest('/testimonials');
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch testimonials');
  }
};

// Submit new testimonial (FormData for file upload)
export const submitTestimonial = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/testimonials-add`, {
      method: 'POST',
      credentials: 'include',
      body: formData, // Don't set Content-Type header for FormData
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Submit testimonial failed:', error);
    throw error;
  }
};

// Admin functions
export const fetchAllTestimonials = async () => {
  try {
    const response = await apiRequest('/admin/testimonials');
    const data = await response.json();
    return { data };
  } catch (error) {
    throw new Error('Failed to fetch all testimonials');
  }
};

export const approveTestimonial = async (id) => {
  try {
    const response = await apiRequest(`/admin/testimonials/approve/${id}`, {
      method: 'PUT',
    });
    return await response.json();
  } catch (error) {
    throw new Error('Failed to approve testimonial');
  }
};

export const rejectTestimonial = async (id) => {
  try {
    const response = await apiRequest(`/admin/testimonials/reject/${id}`, {
      method: 'PUT',
    });
    return await response.json();
  } catch (error) {
    throw new Error('Failed to reject testimonial');
  }
};

export const deleteTestimonial = async (id) => {
  try {
    const response = await apiRequest(`/admin/testimonials/${id}`, {
      method: 'DELETE',
    });
    return await response.json();
  } catch (error) {
    throw new Error('Failed to delete testimonial');
  }
};

export const toggleActive = async (id) => {
  try {
    const response = await apiRequest(`/admin/testimonials/toggle/${id}`, {
      method: 'PUT',
    });
    return await response.json();
  } catch (error) {
    throw new Error('Failed to toggle testimonial status');
  }
};

// Get testimonials by status (for admin filtering)
export const getTestimonialsByStatus = async (status) => {
  try {
    const response = await apiRequest(`/admin/testimonials?status=${status}`);
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch testimonials by status');
  }
};
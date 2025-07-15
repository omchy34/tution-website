import React, { useEffect, useState } from 'react';
import {
  fetchAllTestimonials,
  approveTestimonial,
  rejectTestimonial,
  deleteTestimonial,
  toggleActive,
} from '../api/testimonialAPI';
import TestimonialCard from '../components/TestimonialCard';

const AdminTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  const loadTestimonials = async () => {
    try {
      const res = await fetchAllTestimonials();
      setTestimonials(res.data);
    } catch (err) {
      console.error('Failed to fetch testimonials:', err);
    }
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  const handleAction = async (actionFn, id) => {
    try {
      await actionFn(id);
      loadTestimonials();
    } catch (err) {
      console.error('Action failed:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin - Manage Testimonials</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(testimonial => (
            <TestimonialCard
              key={testimonial._id}
              testimonial={testimonial}
              onApprove={() => handleAction(approveTestimonial, testimonial._id)}
              onReject={() => handleAction(rejectTestimonial, testimonial._id)}
              onDelete={() => handleAction(deleteTestimonial, testimonial._id)}
              onToggle={() => handleAction(toggleActive, testimonial._id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminTestimonials;

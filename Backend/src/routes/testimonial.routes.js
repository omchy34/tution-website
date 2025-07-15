import express from 'express';
import upload from '../middleware/upload.middleware.js';
import {
  createTestimonial,
  getApprovedTestimonials,
  getAllTestimonials,
  approveTestimonial,
  rejectTestimonial,
  deleteTestimonial,
  toggleActiveStatus
} from '../controllers/testimonial.controller.js';

const router = express.Router();

// Submit testimonial (with image)
router.post('/testimonials-add', upload.single('image'), createTestimonial);

// Get approved testimonials
router.get('/testimonials', getApprovedTestimonials);

router.get('/admin/testimonials', getAllTestimonials);
router.put('/admin/testimonials/approve/:id', approveTestimonial);
router.put('/admin/testimonials/reject/:id', rejectTestimonial);
router.delete('/admin/testimonials/:id', deleteTestimonial);
router.put('/admin/testimonials/toggle/:id', toggleActiveStatus);


export default router;

import Testimonial from '../models/testimonial.model.js';

// Create new testimonial
export const createTestimonial = async (req, res) => {
  try {
    const {
      name, email, phone, role,
      exam, rank, content, rating
    } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !role || !exam || !rank || !content || !rating) {
      return res.status(400).json({ 
        message: 'All required fields must be provided' 
      });
    }

    // Validate rating
    const ratingNum = parseInt(rating);
    if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      return res.status(400).json({ 
        message: 'Rating must be a number between 1 and 5' 
      });
    }

    // Validate exam enum
    const validExams = ['JEE', 'NEET', 'Board', 'Inter', 'BSc', 'MSc'];
    if (!validExams.includes(exam)) {
      return res.status(400).json({ 
        message: 'Invalid exam type' 
      });
    }

    // Cloudinary image URL (if uploaded)
    const image = req.file ? req.file.path : null;

    const testimonial = new Testimonial({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      role: role.trim(),
      exam: exam.trim(),
      rank: rank.trim(),
      content: content.trim(),
      rating: ratingNum,
      image,
      status: 'pending', // Default status
      isActive: true
    });

    await testimonial.save();

    res.status(201).json({
      message: 'Testimonial submitted successfully and is pending approval',
      data: testimonial,
    });

  } catch (error) {
    console.error('Create testimonial error:', error);
    
    // Handle mongoose validation errors
    if (error.name === 'ValidationError') {
      const errorMessages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ 
        message: 'Validation error',
        errors: errorMessages
      });
    }

    res.status(500).json({ 
      message: 'Internal server error',
      error: error.message 
    });
  }
};

// Get all approved testimonials (public endpoint)
export const getApprovedTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({
      status: 'approved',
      isActive: true
    }).sort({ createdAt: -1 });

    res.status(200).json(testimonials);
  } catch (error) {
    console.error('Get approved testimonials error:', error);
    res.status(500).json({ 
      message: 'Failed to fetch testimonials',
      error: error.message 
    });
  }
};

// Get all testimonials (admin endpoint)
export const getAllTestimonials = async (req, res) => {
  try {
    const { status } = req.query;
    const filter = {};
    
    if (status && ['pending', 'approved', 'rejected'].includes(status)) {
      filter.status = status;
    }
    
    const testimonials = await Testimonial.find(filter).sort({ createdAt: -1 });
    
    res.status(200).json(testimonials);
  } catch (error) {
    console.error('Get all testimonials error:', error);
    res.status(500).json({ 
      message: 'Failed to fetch testimonials',
      error: error.message 
    });
  }
};

// Approve a testimonial
export const approveTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id) {
      return res.status(400).json({ message: 'Testimonial ID is required' });
    }

    const testimonial = await Testimonial.findByIdAndUpdate(
      id,
      { status: 'approved' },
      { new: true, runValidators: true }
    );
    
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    res.status(200).json({ 
      message: 'Testimonial approved successfully', 
      data: testimonial 
    });
  } catch (error) {
    console.error('Approve testimonial error:', error);
    res.status(500).json({ 
      message: 'Failed to approve testimonial',
      error: error.message 
    });
  }
};

// Reject a testimonial
export const rejectTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id) {
      return res.status(400).json({ message: 'Testimonial ID is required' });
    }

    const testimonial = await Testimonial.findByIdAndUpdate(
      id,
      { status: 'rejected' },
      { new: true, runValidators: true }
    );
    
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    res.status(200).json({ 
      message: 'Testimonial rejected successfully', 
      data: testimonial 
    });
  } catch (error) {
    console.error('Reject testimonial error:', error);
    res.status(500).json({ 
      message: 'Failed to reject testimonial',
      error: error.message 
    });
  }
};

// Delete a testimonial
export const deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id) {
      return res.status(400).json({ message: 'Testimonial ID is required' });
    }

    const testimonial = await Testimonial.findByIdAndDelete(id);
    
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    res.status(200).json({ 
      message: 'Testimonial deleted successfully',
      data: testimonial 
    });
  } catch (error) {
    console.error('Delete testimonial error:', error);
    res.status(500).json({ 
      message: 'Failed to delete testimonial',
      error: error.message 
    });
  }
};

// Toggle active status
export const toggleActiveStatus = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id) {
      return res.status(400).json({ message: 'Testimonial ID is required' });
    }

    const testimonial = await Testimonial.findById(id);
    
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    testimonial.isActive = !testimonial.isActive;
    await testimonial.save();

    res.status(200).json({
      message: `Testimonial is now ${testimonial.isActive ? 'active' : 'inactive'}`,
      data: testimonial,
    });
  } catch (error) {
    console.error('Toggle active status error:', error);
    res.status(500).json({ 
      message: 'Failed to toggle testimonial status',
      error: error.message 
    });
  }
};
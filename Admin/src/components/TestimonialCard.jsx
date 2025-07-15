import React from 'react';
import { Star, CheckCircle, XCircle, Trash2, Eye, EyeOff } from 'lucide-react';

const TestimonialCard = ({ 
  testimonial, 
  onApprove, 
  onReject, 
  onDelete, 
  onToggle 
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={testimonial.image || "https://via.placeholder.com/40"}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(testimonial.status)}`}>
            {testimonial.status}
          </span>
          {!testimonial.isActive && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
              Inactive
            </span>
          )}
        </div>
      </div>

      {/* Contact Info */}
      <div className="mb-4 space-y-1">
        <p className="text-sm text-gray-600">
          <span className="font-medium">Email:</span> {testimonial.email}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Phone:</span> {testimonial.phone}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Exam:</span> {testimonial.exam}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Rank:</span> {testimonial.rank}
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-600">({testimonial.rating}/5)</span>
      </div>

      {/* Content */}
      <div className="mb-4">
        <p className="text-gray-700 text-sm italic leading-relaxed">
          "{testimonial.content}"
        </p>
      </div>

      {/* Timestamps */}
      <div className="mb-4 text-xs text-gray-500 space-y-1">
        <p>Submitted: {formatDate(testimonial.submittedAt)}</p>
        <p>Updated: {formatDate(testimonial.updatedAt)}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        {testimonial.status === 'pending' && (
          <>
            <button
              onClick={onApprove}
              className="flex items-center px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition-colors"
            >
              <CheckCircle className="w-4 h-4 mr-1" />
              Approve
            </button>
            <button
              onClick={onReject}
              className="flex items-center px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors"
            >
              <XCircle className="w-4 h-4 mr-1" />
              Reject
            </button>
          </>
        )}
        
        {testimonial.status === 'approved' && (
          <button
            onClick={onToggle}
            className={`flex items-center px-3 py-1 rounded text-sm transition-colors ${
              testimonial.isActive
                ? 'bg-gray-600 text-white hover:bg-gray-700'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {testimonial.isActive ? (
              <>
                <EyeOff className="w-4 h-4 mr-1" />
                Deactivate
              </>
            ) : (
              <>
                <Eye className="w-4 h-4 mr-1" />
                Activate
              </>
            )}
          </button>
        )}

        <button
          onClick={onDelete}
          className="flex items-center px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors"
        >
          <Trash2 className="w-4 h-4 mr-1" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;
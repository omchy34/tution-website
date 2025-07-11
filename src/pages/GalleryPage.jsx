import React, { useState } from 'react'
import { Search, Grid, List, X, ChevronLeft, ChevronRight, Download, Share2, Eye, Calendar, Camera, Filter, Heart } from 'lucide-react'

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('masonry')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const categories = [
    { id: 'all', name: 'All', count: 24 },
    { id: 'corporate', name: 'Corporate Apparel', count: 8 },
    { id: 'personal', name: 'Personal/Family', count: 6 },
    { id: 'school', name: 'School', count: 5 },
    { id: 'fashion', name: 'Fashion', count: 5 }
  ]

  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      title: 'Corporate Suits Collection',
      description: 'Professional business attire for modern workplace',
      category: 'corporate',
      date: '2024-03-15',
      photographer: 'John Smith',
      views: 1250,
      likes: 89,
      size: 'large'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200&h=800&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=400&fit=crop',
      title: 'Casual Footwear',
      description: 'Comfortable shoes for everyday wear',
      category: 'personal',
      date: '2024-03-12',
      photographer: 'Emma Johnson',
      views: 980,
      likes: 67,
      size: 'medium'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1200&h=800&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=400&fit=crop',
      title: 'Designer Handbags',
      description: 'Luxury accessories for special occasions',
      category: 'fashion',
      date: '2024-03-10',
      photographer: 'Mike Wilson',
      views: 2100,
      likes: 156,
      size: 'small'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=1200&h=800&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=400&fit=crop',
      title: 'School Uniforms',
      description: 'Quality uniforms for educational institutions',
      category: 'school',
      date: '2024-03-08',
      photographer: 'Sarah Davis',
      views: 1800,
      likes: 123,
      size: 'medium'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1529720317453-c8da503f2051?w=1200&h=800&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1529720317453-c8da503f2051?w=600&h=400&fit=crop',
      title: 'Tropical Patterns',
      description: 'Vibrant summer clothing collection',
      category: 'fashion',
      date: '2024-03-05',
      photographer: 'Dr. Robert Lee',
      views: 1450,
      likes: 98,
      size: 'large'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&h=800&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop',
      title: 'Office Essentials',
      description: 'Professional workspace accessories',
      category: 'corporate',
      date: '2024-03-01',
      photographer: 'Lisa Chen',
      views: 3200,
      likes: 245,
      size: 'small'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1506629905607-c7c3c485ecda?w=1200&h=800&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1506629905607-c7c3c485ecda?w=600&h=400&fit=crop',
      title: 'Minimalist Decor',
      description: 'Clean and modern home styling',
      category: 'personal',
      date: '2024-02-28',
      photographer: 'Alex Turner',
      views: 1120,
      likes: 87,
      size: 'medium'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      title: 'Elegant Timepieces',
      description: 'Luxury watches and accessories',
      category: 'fashion',
      date: '2024-02-25',
      photographer: 'Maria Garcia',
      views: 890,
      likes: 76,
      size: 'small'
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=1200&h=800&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=600&h=400&fit=crop',
      title: 'Black Formal Shirt',
      description: 'Premium formal wear collection',
      category: 'corporate',
      date: '2024-02-22',
      photographer: 'David Park',
      views: 1350,
      likes: 112,
      size: 'large'
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1597555464132-7e4e6b3b4d8f?w=1200&h=800&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1597555464132-7e4e6b3b4d8f?w=600&h=400&fit=crop',
      title: 'Nature Inspired',
      description: 'Botanical home decor elements',
      category: 'personal',
      date: '2024-02-20',
      photographer: 'Jennifer Liu',
      views: 1680,
      likes: 134,
      size: 'medium'
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=800&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop',
      title: 'Fashion Forward',
      description: 'Contemporary style and trends',
      category: 'fashion',
      date: '2024-02-18',
      photographer: 'Ryan Martinez',
      views: 1120,
      likes: 93,
      size: 'small'
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=1200&h=800&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=400&fit=crop',
      title: 'School Supplies',
      description: 'Educational materials and accessories',
      category: 'school',
      date: '2024-02-15',
      photographer: 'Thomas Brown',
      views: 1890,
      likes: 156,
      size: 'medium'
    }
  ]

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory
    const matchesSearch = image.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         image.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleImageClick = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredImages.length
      : (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setCurrentIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }

  const getMasonryClass = (index) => {
    // Create specific layout pattern like in the reference image
    const patterns = [
      'col-span-1 row-span-2', // Large vertical
      'col-span-1 row-span-1', // Small square
      'col-span-1 row-span-1', // Small square
      'col-span-1 row-span-1', // Small square
      'col-span-1 row-span-1', // Small square
      'col-span-1 row-span-1', // Small square
      'col-span-1 row-span-1', // Small square
      'col-span-1 row-span-1', // Small square
      'col-span-1 row-span-2', // Large vertical
      'col-span-2 row-span-1', // Wide horizontal
      'col-span-1 row-span-1', // Small square
      'col-span-1 row-span-1', // Small square
    ]
    return patterns[index % patterns.length] || 'col-span-1 row-span-1'
  }

  const getImageHeight = (index) => {
    const patterns = [
      'h-80', // Large vertical
      'h-40', // Small square
      'h-40', // Small square
      'h-40', // Small square
      'h-40', // Small square
      'h-40', // Small square
      'h-40', // Small square
      'h-40', // Small square
      'h-80', // Large vertical
      'h-40', // Wide horizontal
      'h-40', // Small square
      'h-40', // Small square
    ]
    return patterns[index % patterns.length] || 'h-40'
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700  z-40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-15">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white">Gallery</h1>
              <p className="text-gray-400 mt-1">Explore our curated collection</p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'masonry' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:bg-gray-700'}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:bg-gray-700'}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                type="text"
                placeholder="Search gallery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-gray-700 text-white placeholder-gray-400"
              />
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {viewMode === 'masonry' ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 auto-rows-max">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id}
                className={`bg-gray-800 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer group ${getMasonryClass(index)}`}
                onClick={() => handleImageClick(image, index)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={image.thumbnail} 
                    alt={image.title}
                    className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${getImageHeight(index)}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="h-3 w-3 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-white text-sm mb-1">{image.title}</h3>
                    <div className="flex items-center justify-between text-xs text-gray-300">
                      <div className="flex items-center">
                        <Camera className="h-3 w-3 mr-1" />
                        {image.photographer}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {image.views}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id}
                className="bg-gray-800 rounded-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 p-6 cursor-pointer group"
                onClick={() => handleImageClick(image, index)}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={image.thumbnail} 
                      alt={image.title}
                      className="w-full md:w-48 h-32 md:h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{image.title}</h3>
                    <p className="text-gray-400 mb-4">{image.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Camera className="h-4 w-4 mr-1" />
                        {image.photographer}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(image.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {image.views} views
                      </span>
                      <span className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        {image.likes} likes
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
            LOAD MORE
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="relative max-w-6xl max-h-[90vh] w-full mx-4">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 backdrop-blur-sm p-3 rounded-full transition-all duration-200"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            
            {/* Navigation */}
            <button 
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 backdrop-blur-sm p-3 rounded-full transition-all duration-200"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            
            <button 
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 backdrop-blur-sm p-3 rounded-full transition-all duration-200"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
            
            {/* Image */}
            <div className="flex items-center justify-center h-full">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 rounded-b-lg">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300 mb-4">{selectedImage.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center">
                      <Camera className="h-4 w-4 mr-1" />
                      {selectedImage.photographer}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(selectedImage.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {selectedImage.views} views
                    </span>
                    <span className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      {selectedImage.likes} likes
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all duration-200">
                      <Download className="h-5 w-5 text-white" />
                    </button>
                    <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all duration-200">
                      <Share2 className="h-5 w-5 text-white" />
                    </button>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 backdrop-blur-sm p-2 rounded-full transition-all duration-200">
                      <Heart className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryPage
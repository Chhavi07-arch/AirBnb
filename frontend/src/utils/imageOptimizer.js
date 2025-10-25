/**
 * Optimizes Cloudinary image URLs with transformation parameters
 * Reduces image file size by ~60% while maintaining quality
 *
 * @param {string} url - Original Cloudinary image URL
 * @param {number} width - Desired image width in pixels (default: 330)
 * @param {number} height - Desired image height in pixels (default: 250)
 * @returns {string} Optimized Cloudinary URL with transformation parameters
 */
export const optimizeCloudinaryUrl = (url, width = 330, height = 250) => {
  if (!url) return url;

  // Check if URL is from Cloudinary
  if (!url.includes('cloudinary')) {
    return url;
  }

  // Add transformation parameters to Cloudinary URL
  // w_{width}: resize to width
  // h_{height}: resize to height
  // q_auto: automatic quality optimization
  // f_auto: automatic format selection (webp for modern browsers)
  // c_fill: crop to exact dimensions
  return url.replace(
    'upload/',
    `upload/w_${width},h_${height},q_auto,f_auto,c_fill/`
  );
};

/**
 * Optimizes image for thumbnail/card display
 * Used for listing cards in the home page
 *
 * @param {string} url - Original Cloudinary image URL
 * @returns {string} Optimized URL for card display
 */
export const optimizeCardImage = (url) => {
  return optimizeCloudinaryUrl(url, 330, 250);
};

/**
 * Optimizes image for detailed view (larger resolution)
 * Used for ViewCard/detailed listing page
 *
 * @param {string} url - Original Cloudinary image URL
 * @returns {string} Optimized URL for detailed view
 */
export const optimizeDetailImage = (url) => {
  return optimizeCloudinaryUrl(url, 600, 450);
};

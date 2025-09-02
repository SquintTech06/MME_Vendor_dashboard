import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600 leading-relaxed mb-4">
          This is a sample React application demonstrating the integration of 
          React Router DOM for navigation and Tailwind CSS for styling.
        </p>
        <p className="text-gray-600 leading-relaxed">
          The application follows modern React practices and provides a solid 
          foundation for building scalable web applications.
        </p>
      </div>
    </div>
  );
};

export default About;
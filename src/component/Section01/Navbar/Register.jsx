// RegisterForm.jsx
import React, { useEffect } from 'react';

function Register({ onClose }) {
  // Handle form submission (placeholder)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here (e.g., API call)
    alert('Form submitted!'); // Placeholder
    onClose(); // Close the modal after submission
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    // Modal Overlay - Covers the same page without opening new windows
    <div className="fixed inset-0 bg-opacity-50 flex justify-end px-5 py-27 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Register/Login</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700" aria-label="Close form">
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} classNamega="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full border border-gray-300 px-10 p-y-10 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              required
              className="mt-1 block w-full border border-gray-300 px-10 p-y-10 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full border border-gray-300 px-10 p-y-10 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full border border-gray-300 px-10 p-y-10 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-10 p-y-10 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Register
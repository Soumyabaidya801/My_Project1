// RegisterButton.jsx
import React, { useState } from 'react';
import Register from './Register'; // Import the form component

function OnClick() {
  const [showForm, setShowForm] = useState(false); // State to toggle the form modal

  const toggleForm = () => setShowForm(!showForm);

  return (
    <>
      {/* Register/Login Button - This stays on the same page */}
      <button
        onClick={toggleForm} // Only toggles state, no navigation
        className="text-black px-4 py-2 rounded-md hover:text-blue-600"
      >Register/Login
      </button>

      {/* Render the form modal if showForm is true - Overlays the same page */}
      {showForm && <Register onClose={toggleForm} />}
    </>
  );
}

export default OnClick;
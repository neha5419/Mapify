// AddProfileModal.js
import React, { useState } from "react";

const AddProfileModal = ({ closeModal, addProfile }) => {
  const [newProfile, setNewProfile] = useState({
    id: Date.now(),
    name: "",
    description: "",
    photo: "",
    address: "",
    latitude: "",
    longitude: "",
    contactInfo: "",
    interests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({
      ...newProfile,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProfile(newProfile);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Add New Profile</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={newProfile.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="description"
            value={newProfile.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="photo"
            value={newProfile.photo}
            onChange={handleChange}
            placeholder="Photo URL"
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="address"
            value={newProfile.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="latitude"
            value={newProfile.latitude}
            onChange={handleChange}
            placeholder="Latitude"
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="longitude"
            value={newProfile.longitude}
            onChange={handleChange}
            placeholder="Longitude"
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="contactInfo"
            value={newProfile.contactInfo}
            onChange={handleChange}
            placeholder="Contact Info"
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="interests"
            value={newProfile.interests}
            onChange={handleChange}
            placeholder="Interests"
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Add Profile
            </button>
          </div>
        </form>
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AddProfileModal;

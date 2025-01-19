import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileDetails = ({ profile }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl mx-auto mt-8">
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-500 text-white py-2 px-4 rounded-lg mb-6 hover:bg-gray-600"
      >
        Back
      </button>

      <img
        src={profile.photo}
        alt={profile.name}
        className="w-40 h-40 rounded-full mx-auto mb-6"
      />
      <h2 className="text-3xl font-semibold text-center text-gray-800">
        {profile.name}
      </h2>
      <p className="text-gray-600 text-center mb-6">{profile.description}</p>

      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Address:</h3>
      <p className="text-gray-700">{profile.address}</p>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          Additional Details:
        </h3>
        <p>
          <strong>Contact Info:</strong> {profile.contactInfo}
        </p>
        <p>
          <strong>Interests:</strong> {profile.interests}
        </p>
      </div>
    </div>
  );
};

export default ProfileDetails;

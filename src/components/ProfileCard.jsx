import React from "react";

const ProfileCard = ({ profile, onSummaryClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm hover:shadow-xl transition-all duration-300">
      <img
        src={profile.photo}
        alt={profile.name}
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold text-center">{profile.name}</h3>
      <p className="text-gray-600 text-center mb-4">{profile.description}</p>
      <button
        onClick={() => onSummaryClick(profile)}
        className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
      >
        View Summary
      </button>
    </div>
  );
};

export default ProfileCard;

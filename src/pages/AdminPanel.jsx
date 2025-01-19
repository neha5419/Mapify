import React, { useState } from "react";
import { useProfiles } from "../data/ProfileProvider.jsx";
import ProfileCard from "../components/ProfileCard";
import AddProfileModal from "./AddProfileModal";
import EditProfileModal from "./EditProfileModal";
import { ToastContainer, toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";

const AdminPanel = () => {
  const { profiles, addProfile, editProfile, deleteProfile } = useProfiles();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [profileToEdit, setProfileToEdit] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [profileToDelete, setProfileToDelete] = useState(null);

  const handleAddProfile = async (newProfile) => {
    try {
      setIsLoading(true);
      await addProfile({
        ...newProfile,
        id: Math.max(...profiles.map((p) => p.id), 0) + 1,
      });
      setIsAddModalOpen(false);
      toast.success("Profile added successfully!");
    } catch (error) {
      toast.error("Failed to add profile!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditProfile = async (updatedProfile) => {
    try {
      setIsLoading(true);
      await editProfile(updatedProfile);
      setIsEditModalOpen(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteProfile = async () => {
    try {
      setIsLoading(true);
      await deleteProfile(profileToDelete.id);
      setIsDeleteConfirmOpen(false);
      toast.success("Profile deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete profile!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>

        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Add Profile
          </button>
        </div>

        {isLoading && (
          <div className="flex justify-center">
            <ThreeDots color="#00BFFF" height={80} width={80} />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile) => (
            <div key={profile.id} className="relative">
              <ProfileCard profile={profile} onSummaryClick={() => {}} />

              <button
                onClick={() => {
                  setProfileToEdit(profile);
                  setIsEditModalOpen(true);
                }}
                className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
              >
                Edit
              </button>

              <button
                onClick={() => {
                  setProfileToDelete(profile);
                  setIsDeleteConfirmOpen(true);
                }}
                className="absolute bottom-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {isAddModalOpen && (
          <AddProfileModal
            closeModal={() => setIsAddModalOpen(false)}
            addProfile={handleAddProfile}
          />
        )}

        {isEditModalOpen && (
          <EditProfileModal
            profile={profileToEdit}
            closeModal={() => setIsEditModalOpen(false)}
            editProfile={handleEditProfile}
          />
        )}

        {isDeleteConfirmOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
              <h3 className="text-lg font-semibold mb-4">
                Are you sure you want to delete this profile?
              </h3>
              <div className="flex justify-between">
                <button
                  onClick={() => setIsDeleteConfirmOpen(false)}
                  className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteProfile}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        <ToastContainer />
      </div>
    </div>
  );
};

export default AdminPanel;

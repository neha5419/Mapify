import React, { useState, useEffect } from "react";
import { useProfiles } from "../data/ProfileProvider.jsx";
import ProfileCard from "../components/ProfileCard";
import MapComponent from "../components/MapComponent.jsx";
import ProfileDetails from "../pages/ProfileDetails.jsx";
import { ToastContainer, toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";

const ProfilesPage = () => {
  const { profiles } = useProfiles();
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchAttempted, setSearchAttempted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSummaryClick = (profile) => setSelectedProfile(profile);

  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      profile.address.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      profile.interests.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  useEffect(() => {
    if (debouncedQuery) setSearchAttempted(true);
    if (filteredProfiles.length === 0 && debouncedQuery) {
      toast.error("No results found");
    }
  }, [filteredProfiles, debouncedQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-600 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Profile Explorer
        </h1>

        <div className="mb-6 flex items-center justify-center">
          <input
            type="text"
            placeholder="Search profiles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="ml-2 p-2 bg-red-500 text-white rounded-lg"
            >
              Clear
            </button>
          )}
        </div>

        {isLoading && (
          <div className="flex justify-center">
            <ThreeDots color="#00BFFF" height={80} width={80} />
          </div>
        )}

        {selectedProfile ? (
          <ProfileDetails profile={selectedProfile} />
        ) : (
          <div>
            {filteredProfiles.length === 0 && searchAttempted && (
              <p className="text-center text-gray-500">No results found</p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProfiles.map((profile) => (
                <ProfileCard
                  key={profile.id}
                  profile={profile}
                  onSummaryClick={handleSummaryClick}
                />
              ))}
            </div>
          </div>
        )}

        {selectedProfile?.latitude && selectedProfile?.longitude && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-center text-gray-800">
              Address for {selectedProfile.name}
            </h2>
            <MapComponent selectedProfile={selectedProfile} />
          </div>
        )}

        <ToastContainer />
      </div>
    </div>
  );
};

export default ProfilesPage;

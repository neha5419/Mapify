import React, { createContext, useState, useContext } from "react";

const ProfileContext = createContext();

export const useProfiles = () => {
  return useContext(ProfileContext);
};

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Neha Phadtare",
      description: "Full Stack Developer",
      photo: "my_pic.jpeg",
      address: "Pune,Pradhikaran",
      latitude: 18.6281,
      longitude: 73.7855,
      contactInfo: "8010048356",
      interests: "Drawing,Travelling",
    },
    {
      id: 2,
      name: "Smita Pawar",
      description: "Digital Marketer",
      photo: "smita.jpg",
      address: "Mumbai",
      latitude: 19.076,
      longitude: 72.8777,
      contactInfo: "smith@example.com",
      interests: "Marketing, Reading, Cooking",
    },
    {
      id: 3,
      name: "luke Ramirez",
      description: "Graphic Designer",
      photo: "luke.jpg",
      address: "Ganga nagar,Pune",
      latitude: 18.5147,
      longitude: 73.8192,
      contactInfo: "luke@example.com",
      interests: "Design, Art, Music",
    },
    {
      id: 4,
      name: "Akash patil",
      description: "World Wide Photographer",
      photo: "akash.jpg",
      address: "Hinjewadi,Pune",
      latitude: 18.5662,
      longitude: 73.7497,
      contactInfo: "akash@example.com",
      interests: "Design, Art, Music",
    },
    {
      id: 5,
      name: "Sai kadam",
      description: "I'm an Influencer",
      photo: "sai.jpg",
      address: "Khopoli,Maharashtra",
      latitude: 18.7611,
      longitude: 73.3205,
      contactInfo: "sai@example.com",
      interests: "Design, Art, Music",
    },
    {
      id: 6,
      name: "Anthony Andrew",
      description: "I'm a Interior Designer",
      photo: "anthony.jpg",
      address: "Matheran,Maharashtra",
      latitude: 18.9792,
      longitude: 73.2642,
      contactInfo: "anthony@example.com",
      interests: "Travelling, Singing",
    },
    {
      id: 7,
      name: "Cotton Deol",
      description: "I'm a Finance Manager",
      photo: "cotton.jpg",
      address: "Neral,Maharashtra",
      latitude: 18.9333,
      longitude: 73.2,
      contactInfo: "cotton@example.com",
      interests: "Yoga,Meditation",
    },
    {
      id: 8,
      name: "Mia Kapoor",
      description: "I'm a Model and Influencer",
      photo: "mia.jpg",
      address: "Rishikesh,UttaraKhand",
      latitude: 30.082,
      longitude: 78.2676,
      contactInfo: "mia@example.com",
      interests: "Designing, Makeover",
    },
    {
      id: 9,
      name: "kajal Gorase",
      description: "I'm into Nursing",
      photo: "kajal.jpg",
      address: "Haridwar,Uttarakhand",
      latitude: 29.9457,
      longitude: 78.1642,
      contactInfo: "kajal123@example.com",
      interests: "Dancing Kathak,Drawing,Mehendi",
    },
    {
      id: 10,
      name: "Smruti Palekar",
      description: "I'm a Nail Technician",
      photo: "smruti.jpg",
      address: "Goa",
      latitude: 15.2993,
      longitude: 74.124,
      contactInfo: "palekar@example.com",
      interests: "Trekking,Cycling",
    },
    {
      id: 11,
      name: "Rio Bhaskar",
      description: "I'm a Tattoo Artist",
      photo: "rio.jpg",
      address: "Delhi",
      latitude: 28.6139,
      longitude: 77.209,
      contactInfo: "rio@example.com",
      interests: "Climbing Rocks,trekking",
    },
    {
      id: 12,
      name: "Berlin Disuza",
      description: "I'm a Computer Engenieer",
      photo: "berlin.jpg",
      address: "Shrigonda,Maharashtra",
      latitude: 19.1807,
      longitude: 74.6822,
      contactInfo: "berlin@example.com",
      interests: "Decorating walls,Colouring",
    },
    {
      id: 13,
      name: "Jiya Shankar",
      description: "I'm a Hair Stylist",
      photo: "jiya.jpg",
      address: "Pune",
      latitude: 18.6281,
      longitude: 73.7855,
      contactInfo: "jiya@example.com",
      interests: "Horse riding,Harvesting",
    },
    {
      id: 14,
      name: "Ecaro Heval",
      description: "I'm into Sales",
      photo: "ecaro.jpg",
      address: "Delhi",
      latitude: 28.6139,
      longitude: 77.209,
      contactInfo: "ecaro@example.com",
      interests: "Shopping,Reading,Eating",
    },
    {
      id: 15,
      name: "Renuka Bhattarajee",
      description: "Software Engineer",
      photo: "renuka.jpg",
      address: "Delhi",
      latitude: 28.6139,
      longitude: 77.209,
      contactInfo: "renuka@example.com",
      interests: "Climbing Rocks,trekking",
    },
    {
      id: 16,
      name: "Maggie Jadhav",
      description: "Wild Life Photographer",
      photo: "maggie.jpg",
      address: "Banglore",
      latitude: 12.9716,
      longitude: 77.5946,
      contactInfo: "maggie@example.com",
      interests: "Art,Craft,Reading",
    },
    {
      id: 17,
      name: "Zandana Cruse",
      description: "Actor",
      photo: "zandana.jpg",
      address: "Surat",
      latitude: 21.1702,
      longitude: 72.8311,
      contactInfo: "zandana@example.com",
      interests: "Climbing Rocks,trekking",
    },
    {
      id: 18,
      name: "Tokyo Dcurz",
      description: "Architect",
      photo: "tokyo.jpg",
      address: "Hyderabad",
      latitude: 17.385,
      longitude: 78.4867,
      contactInfo: "tokyo@example.com",
      interests: "Eating,Swimming",
    },
    {
      id: 19,
      name: "Tom Helad",
      description: "Tourist Guide",
      photo: "tom.jpg",
      address: "Chennai",
      latitude: 13.0827,
      longitude: 80.2707,
      contactInfo: "tom@example.com",
      interests: "Painting,Yoga",
    },
    {
      id: 20,
      name: "Malika Shroff",
      description: "Singer",
      photo: "malika.jpg",
      address: "Mumbai",
      latitude: 19.076,
      longitude: 72.8777,
      contactInfo: "malika@example.com",
      interests: "Skecting, Shopping",
    },
    {
      id: 21,
      name: "Masaba Gupta",
      description: "Fashion Designer",
      photo: "masaba.jpg",
      address: "Indore",
      latitude: 22.7196,
      longitude: 75.8577,
      contactInfo: "masaba@example.com",
      interests: "Dancing,Travelling",
    },
    {
      id: 22,
      name: "Priya Chavan",
      description: "Model",
      photo: "priya.jpg",
      address: "Pathna",
      latitude: 25.5941,
      longitude: 85.1376,

      contactInfo: "priya@example.com",
      interests: "Skecting, Shopping",
    },
    {
      id: 23,
      name: "Sakshi Patil",
      description: "ENTC",
      photo: "sakshi.jpg",
      address: "Delhi",
      latitude: 28.6139,
      longitude: 77.209,

      contactInfo: "sakshi@example.com",
      interests: "Swimming,Boating,Sleeping",
    },
    {
      id: 24,
      name: "Vikram Panda",
      description: "IPS Officer",
      photo: "vikram.jpg",
      address: "karnataka",
      latitude: 12.9716,
      longitude: 77.5946,
      contactInfo: "vikram@example.com",
      interests: "Rope climbing, karate",
    },
    {
      id: 25,
      name: "Mau Dinkar",
      description: "Model",
      photo: "mau.jpg",
      address: "Kerala",
      latitude: 8.5241,
      longitude: 76.9366,
      contactInfo: "mau@example.com",
      interests: "Skecting, Shopping",
    },
  ]);

  const addProfile = (profile) => {
    setProfiles((prevProfiles) => [...prevProfiles, profile]);
  };

  const editProfile = (updatedProfile) => {
    setProfiles((prevProfiles) =>
      prevProfiles.map((profile) =>
        profile.id === updatedProfile.id ? updatedProfile : profile
      )
    );
  };

  const deleteProfile = (id) => {
    setProfiles((prevProfiles) =>
      prevProfiles.filter((profile) => profile.id !== id)
    );
  };

  return (
    <ProfileContext.Provider
      value={{ profiles, addProfile, editProfile, deleteProfile }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

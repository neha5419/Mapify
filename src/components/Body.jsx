import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Body = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/profiles");
  }
  return (
    <div className="relative h-screen w-full bg-gray-800">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1920')",
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-gray-900"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-tight tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Discover the Art of <br />
          <span className="text-blue-500">Profile Exploration</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Simplify the way you interact with profiles. Seamlessly manage,
          explore, and visualize data with an elegant touch.
        </motion.p>

        <motion.button
          className="mt-8 px-8 py-3 text-lg font-semibold bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 mb-40"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default Body;

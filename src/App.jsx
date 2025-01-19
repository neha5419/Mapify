import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilesPage from "./pages/ProfilesPage";
import AdminPanel from "./pages/AdminPanel";
import Login from "./pages/login";
import HomeLayout from "./components/HomeLayout";
import CustomError from "./components/CustomError";
import Body from "./components/Body";
import { ProfileProvider } from "./data/ProfileProvider.jsx"; // Import ProfileProvider


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <CustomError />,
      children: [
        {
           index: true,
            element: <Body />
           },
        { 
          path: "/profiles", 
          element: <ProfilesPage /> 
        },
        { 
          path: "/login",
          element: <Login />
         },
        { 
          path: "/admin",
           element: <AdminPanel /> 
          }
      ],
    },
  ]);

  return (
    <ProfileProvider>
      <div className="bg-gray-100 min-h-screen">
        <RouterProvider router={router} />
      </div>
    </ProfileProvider>
  );
};

export default App;

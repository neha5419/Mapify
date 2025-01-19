import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
export default function HomeLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

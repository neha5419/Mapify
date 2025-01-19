import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h3 className="text-2xl font-semibold cursor-pointer">
        <p onClick={handleClick}>Mapify</p>
      </h3>
      <ul className="flex space-x-6">
        <li>
          <Link
            to="/profiles"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            Profiles
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            Admin Login
          </Link>
        </li>
      </ul>
    </header>
  );
}

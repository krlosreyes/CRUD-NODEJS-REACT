import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user)

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
    <div className="flex items-center gap-x-3">
    <img src="/images/Logo.PNG" alt="Logo" className="w-11 h-11" />
      <h1 className="text-2xl font-bold">
        <Link to={isAuthenticated ? "/tasks" : "/"}>Task Manager V1.0</Link>
      </h1>
    </div>
    <ul className="flex gap-x-2">
      {isAuthenticated ? (
        <>
          <li>
            Welcome <span className="font-bold text-green-500">{user.username}</span>
          </li>
          <li>
            <ButtonLink to="/add-task">Add Task</ButtonLink>
          </li>
          <li>
            <Link to="/" onClick={() => logout()}>
            <span className="font-bold text-red-500">Logout </span>
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <ButtonLink to="/login">Login</ButtonLink>
          </li>
          <li>
            <ButtonLink to="/register">Register</ButtonLink>
          </li>
        </>
      )}
    </ul>
  </nav>  
  );
}

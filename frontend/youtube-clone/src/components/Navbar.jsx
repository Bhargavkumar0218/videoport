import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext.jsx";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      <h1>YouTube Clone</h1>
      <div>
        <Link to="/">Home</Link>
        {user ? (
          <>
            <Link to="/favorites">Favorites</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

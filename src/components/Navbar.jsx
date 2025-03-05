import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar({ isLoggedIn, setShowAuthModal }) {
  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className="bg-block-dark shadow-lg p-4 sticky top-0 z-10"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-block-blue">Ticket'D</h1>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-block-purple font-semibold"
                  : "text-block-light hover:text-block-blue"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive
                  ? "text-block-purple font-semibold"
                  : "text-block-light hover:text-block-blue"
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resell"
              className={({ isActive }) =>
                isActive
                  ? "text-block-purple font-semibold"
                  : "text-block-light hover:text-block-blue"
              }
            >
              Resell
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/community"
              className={({ isActive }) =>
                isActive
                  ? "text-block-purple font-semibold"
                  : "text-block-light hover:text-block-blue"
              }
            >
              Community
            </NavLink>
          </li>
          <li>
            {isLoggedIn ? (
              <button className="text-block-light hover:text-block-blue">
                Logout
              </button>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="text-block-light hover:text-block-blue"
              >
                Login/Signup
              </button>
            )}
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
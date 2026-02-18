import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="bg-blue-900 text-white
        px-6 py-4 flex juatify-between items-center"
    >
      <h1 classname="text-xl font-bold">Bright Classes</h1>

      <div className="space-x-6 hidden md:flex">
        <Link to="/" className="hover:text-yellow-300">
          Home
        </Link>
        <Link to="/about" className="hover:text-yellow-300">
          About
        </Link>
        <Link to="/couser" className="hover:text-yellow-300">
          Couser
        </Link>
        <Link to="/contact" className="hover:text-yellow-300">
          Contact
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;

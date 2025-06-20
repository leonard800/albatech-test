"use client";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between h-20 w-full px-8 bg-white shadow">
      <div className="flex items-center">
        <img src="/logo.png" alt="Alba Logo" className="h-10 w-auto" />
      </div>

      <div className="flex items-center space-x-8">
        <Link to="/" className="text-black font-semibold hover:text-yellow-400">About</Link>
        <Link to="/" className="text-black font-semibold hover:text-yellow-400">Service</Link>
        <Link to="/" className="text-black font-semibold hover:text-yellow-400">Portfolio</Link>
        <Link to="/" className="text-black font-semibold hover:text-yellow-400">Career</Link>
        <Link
          to="/login"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full transition duration-300"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

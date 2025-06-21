"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img src="/logo.png" alt="Alba Logo" className="h-10 w-auto" />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4">
          <NavLinks isMobile />
        </div>
      )}
    </nav>
  );
}

function NavLinks({ isMobile = false }: { isMobile?: boolean }) {
  const baseStyle = "block text-black font-semibold hover:text-yellow-400";
  const buttonStyle =
    "bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full transition duration-300";

  return (
    <>
      <Link to="/" className={baseStyle}>
        About
      </Link>
      <Link to="/" className={baseStyle}>
        Service
      </Link>
      <Link to="/" className={baseStyle}>
        Portfolio
      </Link>
      <Link to="/" className={baseStyle}>
        Career
      </Link>
      <Link to="/login" className={isMobile ? baseStyle : buttonStyle}>
        Login
      </Link>
    </>
  );
}

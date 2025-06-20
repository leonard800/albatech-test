"use client";
import React from "react";

export default function Navbar () {
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-white">
            <div className="flex items-center">
                <img src="/logo.png" alt="Alba Logo" className="h-10 w-auto" />
            </div>

            <div className="flex items-center space-x-8">
                <a href="#about" className="text-black font-semibold hover:text-yellow-400">About</a>
                <a href="#service" className="text-black font-semibold hover:text-yellow-400">Service</a>
                <a href="#portfolio" className="text-black font-semibold hover:text-yellow-400">Portfolio</a>
                <a href="#career" className="text-black font-semibold hover:text-yellow-400">Career</a>
                <a
                href="#contact"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full transition duration-300"
                >
                Login
                </a>
            </div>
        </nav>
    )
}
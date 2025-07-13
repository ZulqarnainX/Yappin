"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, MessageSquare, Users, User, Settings } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-gradient-to-br from-[#00A9FF] via-[#89CFF3] to-[#CDF5FD] w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex md:px-30 items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Logo"
              width={150}
              draggable="false"
              className="select-none"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink icon={MessageSquare} label="Chat" href="#" />
            <NavLink icon={Users} label="Friends" href="#" />
            <NavLink icon={User} label="Profile" href="#" />
            <NavLink icon={Settings} label="Settings" href="#" />
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen((prev) => !prev)} className="text-white">
              {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Smooth Dropdown */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out w-full ${
          menuOpen ? "opacity-100 translate-y-0 max-h-96" : "opacity-0 -translate-y-5 max-h-0"
        } bg-white overflow-hidden shadow-md`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4">
          <NavLink icon={MessageSquare} label="Chat" href="#" mobile />
          <NavLink icon={Users} label="Friends" href="#" mobile />
          <NavLink icon={User} label="Profile" href="#" mobile />
          <NavLink icon={Settings} label="Settings" href="#" mobile />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ icon: Icon, label, href, mobile }) => (
  <a
    href={href}
    className={`flex items-center gap-2 ${
      mobile
        ? "text-base text-[#004E89] font-bold hover:text-[#3e4cf4]"
        : "text-[#004E89] text-base font-bold hover:text-[#3e4cf4] hover:scale-105"
    } transition duration-300`}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </a>
);

export default Navbar;

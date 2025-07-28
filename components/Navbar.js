"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, MessageSquare, Users, House, Settings, BookOpenText } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import Link from 'next/link'

const Navbar = () => {
  // const user = useUser();
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
    <nav className="bg-gradient-to-br sticky from-[#00A9FF] via-[#89CFF3] to-[#a2d8e4fa] w-full z-50 shadow-md">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex md:px-60 items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Logo"
              width={150}
              draggable="false"
              className="select-none"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink icon={House} label="Home" href="/" />
            <NavLink icon={MessageSquare} label="Chat" href="/chat" />
            <NavLink icon={BookOpenText} label="Forums" href="/forums" />
            <UserButton />
          </div>

          {/* Hamburger */}
          <div className="md:hidden flex items-center space-x-3">
            <button onClick={() => setMenuOpen((prev) => !prev)} className="text-white">
              {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
            <UserButton />
          </div>
        </div>
      </div>

      {/* Smooth Dropdown */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out w-full ${menuOpen ? "opacity-100 translate-y-0 max-h-96" : "opacity-0 -translate-y-5 max-h-0"
          } bg-white overflow-hidden shadow-md`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4">
          <NavLink icon={House} label="Home" href="/" mobile />
          <NavLink icon={MessageSquare} label="Chat" href="/chat" mobile />
          <NavLink icon={BookOpenText} label="Forums" href="/forums" mobile />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ icon: Icon, label, href, mobile }) => (
  <Link
    href={href}
    className={`flex items-center gap-2 ${mobile
        ? "text-base text-[#004E89] font-bold hover:text-[#3e4cf4]"
        : "text-[#004E89] text-base font-bold hover:text-[#3e4cf4] hover:scale-105"
      } transition duration-300`}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </Link>
);

export default Navbar;

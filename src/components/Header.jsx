// 



"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-8 sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white hover:text-indigo-400 transition"
          >
            Dev Story
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-medium">
            <Link
              href="/abouts"
              className="text-slate-300 hover:text-white transition"
            >
              About
            </Link>
            <Link
              href="/stories"
              className="text-slate-300 hover:text-white transition"
            >
              Stories
            </Link>
            <Link
              href="/login"
              className="text-slate-300 hover:text-white transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-100 transition"
            >
              Register
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              // Close icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition"
            >
              About
            </Link>
            <Link
              href="/stories"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition"
            >
              Stories
            </Link>
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg bg-white text-slate-900 font-semibold text-center hover:bg-slate-100 transition"
            >
              Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
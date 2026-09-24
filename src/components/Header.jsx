"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950 px-4 backdrop-blur-md">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-xl font-bold tracking-tight text-white"
          >
            <span className="transition-transform duration-300 group-hover:rotate-6">
              🚀
            </span>

            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-indigo-400">
              Dev Story
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 md:flex">
            {/* About */}
            <Link
              href="/abouts"
              className="group relative px-4 py-2 text-sm font-medium text-slate-300 rounded-full transition-all duration-300 hover:bg-slate-800 hover:text-white"
            >
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-indigo-400">
                About
              </span>
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-3/4 " />
            </Link>

            {/* Stories */}
            <Link
              href="/stories"
              className="group relative px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 rounded-full hover:bg-slate-800  hover:text-white"
            >
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-indigo-400">
                Stories
              </span>
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-3/4" />
            </Link>
            {/*Tutoriles */}
            <Link
              href="/tutorials"
              className="group relative px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 rounded-full hover:bg-slate-800  hover:text-white"
            >
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-indigo-400">
                Tutorials
              </span>
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-3/4" />
            </Link>

            {/* Login */}
            <Link
              href="/login"
              className="group relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-slate-800 hover:text-white"
            >
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-3/4" />

              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-indigo-400">
                Login
              </span>

              {/* Glow */}
              <span className="absolute inset-0 -z-10 rounded-full bg-indigo-500/10 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
            </Link>

            {/* Register */}
            <Link
              href="/register"
              className="group relative px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 rounded-full hover:bg-slate-800  hover:text-white"
            >
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-indigo-400">
                Register
              </span>
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-3/4" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-slate-300 transition-all duration-300 hover:bg-slate-800 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              // Close
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 md:hidden">
          <nav className="flex flex-col gap-2 px-4 py-4">
            {/* About */}
            <Link
              href="/abouts"
              onClick={() => setIsOpen(false)}
              className="group flex items-center rounded-xl px-4 py-3 text-slate-300 transition-all duration-300 hover:bg-slate-800 hover:pl-6 hover:text-white"
            >
              <span className="mr-3">👤</span>
              About
              <span className="ml-auto opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </Link>

            {/* Stories */}
            <Link
              href="/stories"
              onClick={() => setIsOpen(false)}
              className="group flex items-center rounded-xl px-4 py-3 text-slate-300 transition-all duration-300 hover:bg-slate-800 hover:pl-6 hover:text-white"
            >
              <span className="mr-3">📖</span>
              Stories
              <span className="ml-auto opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </Link>
            <Link
              href="/tutorials"
              onClick={() => setIsOpen(false)}
              className="group flex items-center rounded-xl px-4 py-3 text-slate-300 transition-all duration-300 hover:bg-slate-800 hover:pl-6 hover:text-white"
            >
              <span className="mr-3">😊</span>
              Tutorials
              <span className="ml-auto opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </Link>

            {/* Login */}
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="group flex items-center rounded-xl px-4 py-3 text-slate-300 transition-all duration-300 hover:bg-indigo-500/10 hover:text-indigo-300"
            >
              <span className="mr-3 text-lg transition-transform duration-300 group-hover:scale-110">
                🔐
              </span>
              Login
              <span className="ml-auto opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </Link>

            {/* Register */}
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="group flex items-center rounded-xl px-4 py-3 text-slate-300 transition-all duration-300 hover:bg-indigo-500/10 hover:text-indigo-300"
            >
              🔒 Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

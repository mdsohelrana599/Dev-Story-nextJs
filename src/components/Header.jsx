"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // Check login status
  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    checkLogin();

    // Listen for login/logout changes in this tab
    window.addEventListener("authChange", checkLogin);
    window.addEventListener("storage", checkLogin);

    return () => {
      window.removeEventListener("authChange", checkLogin);
      window.removeEventListener("storage", checkLogin);
    };
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setIsOpen(false);
    window.dispatchEvent(new Event("authChange"));
    router.replace("/login");
  };

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
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Dev Story
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 md:flex">
            <Link
              href="/abouts"
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              About
            </Link>

            <Link
              href="/stories"
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              Stories
            </Link>

            <Link
              href="/tutorials"
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              Tutorials
            </Link>

            {/* Login / Logout */}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="rounded-full bg-gradient-to-r from-red-500 to-pink-600 px-5 py-2 text-sm font-semibold text-white transition hover:scale-105 hover:shadow-lg hover:shadow-red-500/20"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="rounded-full px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500/20"
              >
                Login
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
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
            <Link
              href="/abouts"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              👤 About
            </Link>

            <Link
              href="/stories"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              📖 Stories
            </Link>

            <Link
              href="/tutorials"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              📚 Tutorials
            </Link>

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="rounded-xl px-4 py-3 text-left font-semibold text-red-400 transition hover:bg-red-500/10"
              >
                🚪 Logout
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-indigo-500/10 hover:text-indigo-300"
              >
                🔐 Login
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

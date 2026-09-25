"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: "🏠",
    },
    {
      name: "Add Story",
      href: "/dashboard/add-story",
      icon: "📚",
    },
    {
      name: "My Profile",
      href: "/dashboard/my-profile",
      icon: "👤",
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: "⚙️",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      {/* ================================
          MOBILE OVERLAY
      ================================= */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* ================================
          SIDEBAR / NAVBAR
      ================================= */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-screen w-72 flex-col
          border-r border-slate-800
          bg-slate-950 text-white
          shadow-2xl
          transition-transform duration-300 ease-in-out

          lg:w-64
          lg:translate-x-0

          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-800 px-5">
          <Link
            href="/"
            onClick={() => setSidebarOpen(false)}
            className="group flex items-center gap-2"
          >
            <span className="text-2xl transition-transform duration-300 group-hover:rotate-12">
              🚀
            </span>

            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-xl font-bold text-transparent">
              Dev Story
            </span>
          </Link>

          {/* Mobile Close Button */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-slate-400 transition hover:bg-slate-800 hover:text-white lg:hidden"
          >
            ✕
          </button>
        </div>

        {/* User */}
        <div className="mx-4 mt-5 rounded-2xl border border-slate-800 bg-slate-900 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 font-bold text-white shadow-lg">
              S
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-sm font-semibold text-white">
                Sohel Rana
              </h3>

              <p className="text-xs text-slate-500">Story Creator</p>
            </div>
          </div>
        </div>

        Navigation
        <nav className="mt-6 flex-1 overflow-y-auto px-4">
          <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
            Main Menu
          </p>

          <div className="space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    group flex items-center gap-3
                    rounded-xl px-4 py-3
                    text-sm font-medium
                    transition-all duration-200

                    ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-900/30"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }
                  `}
                >
                  <span
                    className={`
                      text-lg transition-transform duration-200
                      ${isActive ? "scale-110" : "group-hover:scale-110"}
                    `}
                  >
                    {item.icon}
                  </span>

                  <span>{item.name}</span>

                  {isActive && (
                    <span className="ml-auto h-2 w-2 rounded-full bg-white" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Logout */}
        <div className="shrink-0 border-t border-slate-800 p-4">
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-400 transition-all duration-200 hover:bg-red-500 hover:text-white">
            <span>🚪</span>
            Logout
          </button>
        </div>
      </aside>

      {/* ================================
          MOBILE TOP BAR
      ================================= */}
      <div className="fixed left-0 right-0 top-0 z-30 flex h-16 items-center border-b border-slate-200 bg-white px-4 shadow-sm lg:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="
            flex h-10 w-10
            items-center justify-center
            rounded-xl
            border border-slate-200
            bg-white
            text-xl
            text-slate-700
            shadow-sm
            transition
            hover:border-indigo-500
            hover:bg-indigo-50
            hover:text-indigo-600
          "
          aria-label="Open menu"
        >
          ☰
        </button>

        <Link
          href="/dashboard"
          className="ml-3 text-lg font-bold text-slate-800"
        >
          Dashboard
        </Link>
      </div>

      {/* ================================
          MAIN CONTENT
      ================================= */}
      <main
        className="
          min-h-screen
          pt-16
          lg:ml-64
          lg:pt-0
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1600px]
            p-4
            sm:p-6
            lg:p-8
          "
        >
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;

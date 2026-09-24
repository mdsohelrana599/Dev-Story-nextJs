"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  const router = useRouter();

  const handleBtn = () => {
    while (true) {
      const password = prompt("Enter Your Password");

      // Cancel করলে বন্ধ হবে
      if (password === null) {
        return;
      }

      // Password সঠিক হলে Dashboard এ যাবে
      if (password.trim() === "700599") {
        router.push("/dashboard");
        return;
      }

      // ভুল password
      alert("Wrong password! Please try again.");
    }
  };

  return (
    <div className="w-full">
      <section className="relative w-full min-h-[90vh] md:min-h-screen overflow-hidden rounded-none md:rounded-3xl bg-slate-950 shadow-2xl flex items-center justify-center my-0 md:my-4">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950" />

        {/* Glow Effects */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/30 blur-3xl pointer-events-none" />

        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-violet-500/30 blur-3xl pointer-events-none" />

        <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto py-16 md:py-24">
          {/* Badge */}
          <div className="mb-6 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs sm:text-sm text-indigo-200 backdrop-blur-md shadow-lg">
            🚀 Welcome to my developer journey
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Dev{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Story
            </span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
            Building in public • Sharing the journey •
            <br className="hidden sm:block" />
            Shipping real projects 🚀
          </p>

          {/* Button */}
          <button
            onClick={handleBtn}
            className="group rounded-full bg-white px-8 py-4 font-semibold
            text-slate-900 shadow-xl shadow-white/10
            transition-all duration-300
            hover:-translate-y-1 hover:bg-indigo-100
            hover:shadow-2xl hover:shadow-indigo-500/30
            active:translate-y-0 text-sm sm:text-base"
          >
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-indigo-400">
              Share-Story{" "}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </button>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              💻 Web Development
            </span>
            <span className="flex items-center gap-1.5">⚡ Real Projects</span>
            <span className="flex items-center gap-1.5">🌎 Open Journey</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;

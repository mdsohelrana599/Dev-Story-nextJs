"use client";

import React from "react";
import Titel from "@/components/Titel";
import {
  User,
  Mail,
  AtSign,
  ShieldCheck,
  MapPin,
  CalendarDays,
  Edit3,
  BookOpen,
  Heart,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const MyProfile = () => {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-6 md:px-6 lg:px-8">
      {/* Page Title */}
      <Titel>My Profile</Titel>

      {/* Profile Card */}
      <div className="mx-auto mt-6 max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-indigo-950/30">
        {/* ================= COVER BANNER ================= */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950 md:h-64">
          {/* Glow */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl" />

          <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-purple-500/25 blur-3xl" />

          <div className="absolute bottom-[-100px] left-1/3 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl" />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "35px 35px",
            }}
          />

          {/* Banner Content */}
          <div className="relative z-10 flex h-full items-center justify-center px-5 text-center">
            <div>
              <div className="mb-3 flex justify-center">
                <div className="rounded-full border border-white/10 bg-white/10 p-3 backdrop-blur-md">
                  <Sparkles className="h-6 w-6 text-indigo-300" />
                </div>
              </div>

              <p className="text-xs font-medium uppercase tracking-[0.3em] text-indigo-300 md:text-sm">
                Welcome to
              </p>

              <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                Dev <span className="text-indigo-400">Story</span>
              </h1>

              <p className="mt-2 text-xs text-slate-300 md:text-sm">
                Share your story • Inspire others • Connect with the world
              </p>
            </div>
          </div>

          {/* Bottom Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900 to-transparent" />
        </div>

        {/* ================= PROFILE CONTENT ================= */}
        <div className="px-5 pb-8 md:px-8">
          {/* Profile Header */}
          <div className="relative -mt-16 flex flex-col items-center md:-mt-20 md:flex-row md:items-end md:justify-between">
            {/* Avatar + Name */}
            <div className="flex flex-col items-center md:flex-row md:items-end">
              {/* Avatar */}
              <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-slate-900 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-5xl font-extrabold text-white shadow-xl shadow-indigo-950/50">
                S
              </div>

              {/* User Info */}
              <div className="mt-4 text-center md:ml-5 md:mt-0 md:mb-2 md:text-left">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Sohel Rana
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Story Creator
                  <span className="mx-2 text-indigo-400">•</span>
                  Dev Story
                </p>
              </div>
            </div>

            {/* Edit Button */}
            <button className="mt-5 flex items-center gap-2 rounded-xl border border-indigo-400/20 bg-indigo-500/10 px-5 py-2.5 text-sm font-semibold text-indigo-300 transition-all duration-300 hover:border-indigo-400/40 hover:bg-indigo-500/20 hover:text-white md:mt-0">
              <Edit3 size={17} />
              Edit Profile
            </button>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-white/10" />

          {/* ================= PERSONAL INFORMATION ================= */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-lg bg-indigo-500/10 p-2">
                <User className="h-5 w-5 text-indigo-400" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Personal Information
                </h3>

                <p className="text-xs text-slate-500">
                  Your basic profile information
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Full Name */}
              <div className="group rounded-2xl border border-white/5 bg-slate-800/50 p-5 transition-all duration-300 hover:border-indigo-500/20 hover:bg-slate-800">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-indigo-400" />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Full Name
                    </p>

                    <p className="mt-1 font-semibold text-slate-200">
                      Sohel Rana
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group rounded-2xl border border-white/5 bg-slate-800/50 p-5 transition-all duration-300 hover:border-purple-500/20 hover:bg-slate-800">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-purple-400" />

                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Email
                    </p>

                    <p className="mt-1 break-all font-semibold text-slate-200">
                      sohelrana@example.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Username */}
              <div className="group rounded-2xl border border-white/5 bg-slate-800/50 p-5 transition-all duration-300 hover:border-pink-500/20 hover:bg-slate-800">
                <div className="flex items-center gap-3">
                  <AtSign className="h-5 w-5 text-pink-400" />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Username
                    </p>

                    <p className="mt-1 font-semibold text-slate-200">
                      @sohelrana
                    </p>
                  </div>
                </div>
              </div>

              {/* Role */}
              <div className="group rounded-2xl border border-white/5 bg-slate-800/50 p-5 transition-all duration-300 hover:border-emerald-500/20 hover:bg-slate-800">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-emerald-400" />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Role
                    </p>

                    <p className="mt-1 font-semibold text-slate-200">
                      Story Creator
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="group rounded-2xl border border-white/5 bg-slate-800/50 p-5 transition-all duration-300 hover:border-cyan-500/20 hover:bg-slate-800">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-cyan-400" />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Location
                    </p>

                    <p className="mt-1 font-semibold text-slate-200">
                      Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              {/* Joined */}
              <div className="group rounded-2xl border border-white/5 bg-slate-800/50 p-5 transition-all duration-300 hover:border-orange-500/20 hover:bg-slate-800">
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 text-orange-400" />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Joined
                    </p>

                    <p className="mt-1 font-semibold text-slate-200">
                      September 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= ABOUT ME ================= */}
          <div className="mt-10 rounded-2xl border border-white/5 bg-gradient-to-br from-slate-800/70 to-slate-900/70 p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-purple-500/10 p-2">
                <Sparkles className="h-5 w-5 text-purple-400" />
              </div>

              <h3 className="text-xl font-bold text-white">About Me</h3>
            </div>

            <p className="max-w-3xl leading-7 text-slate-400">
              Welcome to my Dev Story profile. I love discovering interesting
              stories, sharing experiences, and connecting with people through
              meaningful stories from around the world.
            </p>
          </div>

          {/* ================= STATS ================= */}
          <div className="mt-8">
            <h3 className="mb-5 text-xl font-bold text-white">
              Story Statistics
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {/* Stories */}
              <div className="group rounded-2xl border border-indigo-500/10 bg-indigo-500/5 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-indigo-500/10">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
                  <BookOpen className="h-6 w-6 text-indigo-400" />
                </div>

                <h4 className="mt-4 text-3xl font-bold text-indigo-400">12</h4>

                <p className="mt-1 text-sm text-slate-500">Stories</p>
              </div>

              {/* Likes */}
              <div className="group rounded-2xl border border-pink-500/10 bg-pink-500/5 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/30 hover:bg-pink-500/10">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10">
                  <Heart className="h-6 w-6 text-pink-400" />
                </div>

                <h4 className="mt-4 text-3xl font-bold text-pink-400">48</h4>

                <p className="mt-1 text-sm text-slate-500">Likes</p>
              </div>

              {/* Comments */}
              <div className="group rounded-2xl border border-purple-500/10 bg-purple-500/5 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-purple-500/10">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
                  <MessageCircle className="h-6 w-6 text-purple-400" />
                </div>

                <h4 className="mt-4 text-3xl font-bold text-purple-400">8</h4>

                <p className="mt-1 text-sm text-slate-500">Comments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

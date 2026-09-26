"use client";

import React, { useEffect, useState } from "react";
import Titel from "@/components/Titel";
import {
  User,
  Palette,
  Bell,
  Lock,
  Shield,
  Mail,
  Moon,
  Sun,
  Globe,
  Eye,
  KeyRound,
  Trash2,
  ChevronRight,
  Check,
} from "lucide-react";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [privateAccount, setPrivateAccount] = useState(false);

  // Theme state
  const [darkMode, setDarkMode] = useState(true);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Theme toggle
  const handleThemeToggle = () => {
    setDarkMode((prev) => {
      const newMode = !prev;

      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      return newMode;
    });
  };

  // Reusable Toggle Component
  const Toggle = ({ enabled, setEnabled }) => {
    return (
      <button
        type="button"
        onClick={() => setEnabled(!enabled)}
        className={`relative h-6 w-11 rounded-full transition-all duration-300 ${
          enabled ? "bg-indigo-600" : "bg-slate-700"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all duration-300 ${
            enabled ? "left-6" : "left-1"
          }`}
        />
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-6 md:px-6 lg:px-8">
      {/* Page Title */}
      <Titel>Settings</Titel>

      <div className="mx-auto mt-6 max-w-5xl space-y-6">
        {/* ================= ACCOUNT SETTINGS ================= */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-xl">
          <div className="border-b border-white/10 px-5 py-5 md:px-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-indigo-500/10 p-2.5">
                <User className="h-5 w-5 text-indigo-400" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-white">
                  Account Settings
                </h2>

                <p className="text-sm text-slate-500">
                  Manage your account information
                </p>
              </div>
            </div>
          </div>

          <div className="divide-y divide-white/5">
            {/* Profile */}
            <button
              type="button"
              className="flex w-full items-center justify-between px-5 py-5 text-left transition hover:bg-white/[0.03] md:px-6"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-slate-800 p-2.5">
                  <User className="h-5 w-5 text-slate-400" />
                </div>

                <div>
                  <h3 className="font-medium text-slate-200">
                    Profile Information
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Update your name, username and profile details
                  </p>
                </div>
              </div>

              <ChevronRight className="h-5 w-5 text-slate-600" />
            </button>

            {/* Email */}
            <button
              type="button"
              className="flex w-full items-center justify-between px-5 py-5 text-left transition hover:bg-white/[0.03] md:px-6"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-slate-800 p-2.5">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>

                <div>
                  <h3 className="font-medium text-slate-200">Email Address</h3>

                  <p className="mt-1 text-sm text-slate-500">
                    sohelrana@example.com
                  </p>
                </div>
              </div>

              <ChevronRight className="h-5 w-5 text-slate-600" />
            </button>

            {/* Password */}
            <button
              type="button"
              className="flex w-full items-center justify-between px-5 py-5 text-left transition hover:bg-white/[0.03] md:px-6"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-slate-800 p-2.5">
                  <KeyRound className="h-5 w-5 text-slate-400" />
                </div>

                <div>
                  <h3 className="font-medium text-slate-200">
                    Change Password
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Update your account password
                  </p>
                </div>
              </div>

              <ChevronRight className="h-5 w-5 text-slate-600" />
            </button>
          </div>
        </div>

        {/* ================= APPEARANCE ================= */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-xl">
          <div className="border-b border-white/10 px-5 py-5 md:px-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-purple-500/10 p-2.5">
                <Palette className="h-5 w-5 text-purple-400" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-white">Appearance</h2>

                <p className="text-sm text-slate-500">
                  Customize how Dev Story looks
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 md:p-6">
            {/* Theme */}
            <div
              onClick={handleThemeToggle}
              className="flex cursor-pointer items-center justify-between rounded-xl border border-white/5 bg-slate-800/50 p-4 transition hover:bg-slate-800"
            >
              {/* Left Side */}
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="rounded-lg bg-slate-700/50 p-2.5">
                  {darkMode ? (
                    <Moon className="h-5 w-5 text-purple-400" />
                  ) : (
                    <Sun className="h-5 w-5 text-yellow-400" />
                  )}
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-medium text-slate-200">
                    {darkMode ? "Dark Mode" : "Light Mode"}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {darkMode
                      ? "Use dark theme across the application"
                      : "Use light theme across the application"}
                  </p>
                </div>
              </div>

              {/* Toggle */}
              <div
                className={`relative flex h-6 w-11 items-center rounded-full transition-colors ${
                  darkMode ? "bg-indigo-600" : "bg-slate-600"
                }`}
              >
                <div
                  className={`absolute flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-md transition-transform ${
                    darkMode ? "translate-x-5" : "translate-x-0.5"
                  }`}
                >
                  {darkMode && <Check className="h-3 w-3 text-indigo-600" />}
                </div>
              </div>
            </div>

            {/* Language */}
            <div className="mt-4 flex items-center justify-between rounded-xl border border-white/5 bg-slate-800/50 p-4">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-slate-700/50 p-2.5">
                  <Globe className="h-5 w-5 text-cyan-400" />
                </div>

                <div>
                  <h3 className="font-medium text-slate-200">Language</h3>

                  <p className="text-sm text-slate-500">
                    Choose your preferred language
                  </p>
                </div>
              </div>

              <select className="rounded-lg border border-white/10 bg-slate-800 px-3 py-2 text-sm text-slate-300 outline-none focus:border-indigo-500">
                <option>English</option>
                <option>Bangla</option>
              </select>
            </div>
          </div>
        </div>

        {/* ================= NOTIFICATIONS ================= */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-xl">
          <div className="border-b border-white/10 px-5 py-5 md:px-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-pink-500/10 p-2.5">
                <Bell className="h-5 w-5 text-pink-400" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-white">Notifications</h2>

                <p className="text-sm text-slate-500">
                  Control your notification preferences
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 p-5 md:p-6">
            {/* Push Notification */}
            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-slate-800/50 p-4">
              <div className="flex items-center gap-4">
                <Bell className="h-5 w-5 text-pink-400" />

                <div>
                  <h3 className="font-medium text-slate-200">
                    Push Notifications
                  </h3>

                  <p className="text-sm text-slate-500">
                    Receive notifications about your stories
                  </p>
                </div>
              </div>

              <Toggle enabled={notifications} setEnabled={setNotifications}></Toggle>
            </div>

            {/* Email Updates */}
            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-slate-800/50 p-4">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-indigo-400" />

                <div>
                  <h3 className="font-medium text-slate-200">Email Updates</h3>

                  <p className="text-sm text-slate-500">
                    Receive updates and news via email
                  </p>
                </div>
              </div>

              <Toggle enabled={emailUpdates} setEnabled={setEmailUpdates} ></Toggle>
            </div>
          </div>
        </div>

        {/* ================= PRIVACY ================= */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-xl">
          <div className="border-b border-white/10 px-5 py-5 md:px-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-500/10 p-2.5">
                <Shield className="h-5 w-5 text-emerald-400" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-white">
                  Privacy & Security
                </h2>

                <p className="text-sm text-slate-500">
                  Manage your privacy and security settings
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 p-5 md:p-6">
            {/* Private Account */}
            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-slate-800/50 p-4">
              <div className="flex items-center gap-4">
                <Lock className="h-5 w-5 text-emerald-400" />

                <div>
                  <h3 className="font-medium text-slate-200">
                    Private Account
                  </h3>

                  <p className="text-sm text-slate-500">
                    Only approved users can view your stories
                  </p>
                </div>
              </div>

              <Toggle enabled={privateAccount} setEnabled={setPrivateAccount}></Toggle>
            </div>

            {/* Activity */}
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-xl border border-white/5 bg-slate-800/50 p-4 text-left transition hover:bg-slate-800"
            >
              <div className="flex items-center gap-4">
                <Eye className="h-5 w-5 text-cyan-400" />

                <div>
                  <h3 className="font-medium text-slate-200">
                    Activity Visibility
                  </h3>

                  <p className="text-sm text-slate-500">
                    Control who can see your activity
                  </p>
                </div>
              </div>

              <ChevronRight className="h-5 w-5 text-slate-600" />
            </button>
          </div>
        </div>

        {/* ================= DANGER ZONE ================= */}
        <div className="overflow-hidden rounded-2xl border border-red-500/20 bg-red-500/[0.03] shadow-xl">
          <div className="border-b border-red-500/10 px-5 py-5 md:px-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-red-500/10 p-2.5">
                <Trash2 className="h-5 w-5 text-red-400" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-red-400">Danger Zone</h2>

                <p className="text-sm text-slate-500">
                  These actions can permanently affect your account
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between md:p-6">
            <div>
              <h3 className="font-medium text-slate-200">Delete Account</h3>

              <p className="mt-1 text-sm text-slate-500">
                Permanently delete your Dev Story account and data.
              </p>
            </div>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-2.5 text-sm font-semibold text-red-400 transition hover:bg-red-500/20 hover:text-red-300"
            >
              <Trash2 size={17} />
              Delete Account
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end pb-6">
          <button
            type="button"
            className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-7 py-3 font-semibold text-white shadow-lg shadow-indigo-950/30 transition hover:from-indigo-500 hover:to-purple-500"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

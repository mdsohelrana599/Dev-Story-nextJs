"use client";

import Titel from "@/components/Titel";
import Link from "next/link";
import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Code2,
  X,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setModal({
        type: "error",
        title: "Missing Information!",
        message: "Please fill in all required fields.",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setModal({
        type: "error",
        title: "Invalid Email!",
        message: "Please enter a valid email address.",
      });
      return;
    }

    if (password.length < 6) {
      setModal({
        type: "error",
        title: "Weak Password!",
        message: "Your password must contain at least 6 characters.",
      });
      return;
    }

    if (password !== confirmPassword) {
      setModal({
        type: "error",
        title: "Password Mismatch!",
        message: "Password and Confirm Password do not match.",
      });
      return;
    }

    if (!agreeTerms) {
      setModal({
        type: "error",
        title: "Terms Required!",
        message: "Please accept the Terms & Conditions to continue.",
      });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      setModal({
        type: "success",
        title: "Registration Successful!",
        message: `Welcome ${name.trim()}! Your demo registration has been completed successfully.`,
      });
    }, 1000);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-10 text-white sm:px-6">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-indigo-600/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-purple-600/20 blur-[110px]" />

      <div className="relative z-10 grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left Side Banner */}
        <section className="hidden lg:block">
          <span className="inline-flex items-center mb-7 gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            <Sparkles size={16} />
            Join Dev Story Community
          </span>

          <Titel>Create Your Account</Titel>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight xl:text-6xl">
            Start Your
            <br />
            Developer
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Journey Today.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-slate-400">
            Create your Dev Story account and become part of a growing developer
            community. Share your experiences, learn new skills, and inspire
            others.
          </p>

          <div className="mt-10 flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
              <Code2 size={26} />
            </div>

            <div>
              <h3 className="font-bold">Learn. Create. Inspire.</h3>
              <p className="mt-1 text-sm text-slate-400">
                Your story starts with one step.
              </p>
            </div>
          </div>
        </section>

        {/* Right Side Register Form */}
        <section className="mx-auto w-full max-w-md">
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-indigo-950/30 backdrop-blur-xl sm:p-9">
            {/* Mobile Logo */}
            <div className="mb-7 text-center lg:hidden">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-900/40">
                <Code2 size={28} />
              </div>

              <Titel>Dev Story Register</Titel>
            </div>

            <div className="mb-7">
              <span className="text-sm font-semibold text-indigo-400">
                CREATE ACCOUNT
              </span>

              <h2 className="mt-2 text-3xl font-extrabold">Join Dev Story</h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Create your account to start your developer journey.
              </p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-300"
                >
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-slate-950/70 py-3.5 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-300"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-slate-950/70 py-3.5 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-300"
                >
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-slate-950/70 py-3.5 pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-indigo-400"
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-semibold text-slate-300"
                >
                  Confirm Password
                </label>

                <div className="relative">
                  <Lock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-slate-950/70 py-3.5 pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label="Toggle confirm password visibility"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-indigo-400"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3 pt-1">
                <input
                  id="terms"
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 accent-indigo-500"
                />

                <label
                  htmlFor="terms"
                  className="text-xs leading-6 text-slate-400"
                >
                  I agree to the{" "}
                  <Link
                    href="/abouts/terms"
                    className="font-semibold text-indigo-400 hover:text-indigo-300"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and Privacy Policy.
                </label>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3.5 font-bold text-white shadow-lg shadow-indigo-950/30 transition hover:-translate-y-0.5 hover:from-indigo-500 hover:to-purple-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 size={19} className="animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight size={19} />
                  </>
                )}
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-7 text-center text-sm text-slate-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-indigo-400 transition hover:text-indigo-300"
              >
                Login Now
              </Link>
            </div>

            {/* Security */}
            <div className="mt-7 flex items-center justify-center gap-2 border-t border-white/10 pt-6 text-xs text-slate-500">
              <ShieldCheck size={16} className="text-emerald-400" />
              Your journey starts securely with Dev Story
            </div>
          </div>
        </section>
      </div>

      {/* Result Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="register-modal-title"
            className="relative w-full max-w-sm rounded-3xl border border-white/10 bg-slate-900 p-7 text-center shadow-2xl shadow-indigo-950/50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModal(null)}
              aria-label="Close modal"
              className="absolute right-4 top-4 rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <X size={19} />
            </button>

            <div
              className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${
                modal.type === "success"
                  ? "bg-emerald-500/15 text-emerald-400"
                  : "bg-red-500/15 text-red-400"
              }`}
            >
              {modal.type === "success" ? (
                <CheckCircle2 size={34} />
              ) : (
                <AlertCircle size={34} />
              )}
            </div>

            <h2 id="register-modal-title" className="mt-5 text-2xl font-bold">
              {modal.title}
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              {modal.message}
            </p>

            <button
              type="button"
              onClick={() => {
                const success = modal.type === "success";
                setModal(null);

                if (success) {
                  window.location.href = "/login";
                }
              }}
              className="mt-7 w-full rounded-xl bg-indigo-600 py-3 font-semibold transition hover:bg-indigo-500"
            >
              {modal.type === "success" ? "Go to Login" : "Okay, Got it"}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

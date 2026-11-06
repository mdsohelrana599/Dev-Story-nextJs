"use client";

import Titel from "@/components/Titel";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
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

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [modal, setModal] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim() || !password) {
      setModal({
        type: "error",
        title: "Missing Information!",
        message: "Please enter your email and password.",
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

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (
        email.trim().toLowerCase() === "mdsohelrana812005@gmail.com" &&
        password === "700599"
      ) {
        // Save login status
        localStorage.setItem("isLoggedIn", "true");

        setModal({
          type: "success",
          title: "Login Successful!",
          message: "Welcome to Dev Story. Redirecting to Home Page...",
        });

        // Redirect to Home Page
        setTimeout(() => {
          localStorage.setItem("isLoggedIn", "true");
          window.dispatchEvent(new Event("authChange"));
          router.replace("/");
        }, 1000);
      } else {
        setModal({
          type: "error",
          title: "Login Failed!",
          message:
            "Incorrect email or password. Please check your login information and try again.",
        });
      }
    }, 1000);
  };

  const handleForgotPassword = () => {
    setModal({
      type: "info",
      title: "Forgot Password?",
      message:
        "Password recovery is not connected yet. Please contact Dev Story support.",
    });
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-10 text-white sm:px-6">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-indigo-600/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-purple-600/20 blur-[110px]" />

      <div className="relative z-10 grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left Side */}
        <section className="hidden lg:block">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            <Sparkles size={16} />
            Welcome to Dev Story
          </div>

          <Titel>Login to Dev Story</Titel>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight xl:text-6xl">
            Your Journey.
            <br />
            Your Stories.
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Your Future.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-slate-400">
            Welcome back to Dev Story. Login to explore developer stories, share
            your experiences, and continue your programming journey.
          </p>

          <div className="mt-10 flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
              <Code2 size={26} />
            </div>

            <div>
              <h3 className="font-bold">Build. Learn. Share.</h3>
              <p className="mt-1 text-sm text-slate-400">
                Be part of the developer community.
              </p>
            </div>
          </div>
        </section>

        {/* Right Side - Login Form */}
        <section className="mx-auto w-full max-w-md">
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-indigo-950/30 backdrop-blur-xl sm:p-9">
            {/* Mobile Logo */}
            <div className="mb-7 text-center lg:hidden">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-900/40">
                <Code2 size={28} />
              </div>

              <Titel>Dev Story Login</Titel>
            </div>

            <div className="mb-8">
              <span className="text-sm font-semibold text-indigo-400">
                WELCOME BACK
              </span>

              <h2 className="mt-2 text-3xl font-extrabold">Login Account</h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Enter your details to access your Dev Story account.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
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
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-slate-950/70 py-3.5 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-slate-300"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-xs font-medium text-indigo-400 transition hover:text-indigo-300"
                  >
                    Forgot Password?
                  </button>
                </div>

                <div className="relative">
                  <Lock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-slate-950/70 py-3.5 pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-indigo-400"
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 accent-indigo-500"
                />

                <label
                  htmlFor="remember"
                  className="cursor-pointer text-sm text-slate-400"
                >
                  Remember me
                </label>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3.5 font-bold text-white shadow-lg shadow-indigo-950/30 transition hover:-translate-y-0.5 hover:from-indigo-500 hover:to-purple-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 size={19} className="animate-spin" />
                    Checking...
                  </>
                ) : (
                  <>
                    Login Now
                    <ArrowRight size={19} />
                  </>
                )}
              </button>
            </form>

            {/* Register Link */}
            <div className="mt-7 text-center text-sm text-slate-400">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-indigo-400 transition hover:text-indigo-300"
              >
                Create Account
              </Link>
            </div>

            {/* Security */}
            <div className="mt-7 flex items-center justify-center gap-2 border-t border-white/10 pt-6 text-xs text-slate-500">
              <ShieldCheck size={16} className="text-emerald-400" />
              Secure access to your Dev Story account
            </div>
          </div>
        </section>
      </div>

      {/* Login Result Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="relative w-full max-w-sm animate-in zoom-in-95 rounded-3xl border border-white/10 bg-slate-900 p-7 text-center shadow-2xl shadow-indigo-950/50 duration-200"
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
                  : modal.type === "error"
                    ? "bg-red-500/15 text-red-400"
                    : "bg-indigo-500/15 text-indigo-400"
              }`}
            >
              {modal.type === "success" ? (
                <CheckCircle2 size={34} />
              ) : modal.type === "error" ? (
                <AlertCircle size={34} />
              ) : (
                <Mail size={34} />
              )}
            </div>

            <h2 id="modal-title" className="mt-5 text-2xl font-bold">
              {modal.title}
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              {modal.message}
            </p>

            <button
              type="button"
              onClick={() => {
                if (modal.type === "success") {
                  router.replace("/");
                } else {
                  setModal(null);
                }
              }}
              className="mt-7 w-full rounded-xl bg-indigo-600 py-3 font-semibold transition hover:bg-indigo-500"
            >
              {modal.type === "success" ? "Go to Home" : "Okay, Got it"}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

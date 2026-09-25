import Titel from "@/components/Titel";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="">
      <Titel>Welcome To Dashboard</Titel>

      {/* Stats */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Stories */}
        <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Total Stories
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-800">120</h2>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-2xl transition group-hover:scale-110">
              📚
            </div>
          </div>

          <p className="mt-4 text-xs font-medium text-emerald-600">
            ↑ 12% from last month
          </p>
        </div>

        {/* Total Users */}
        <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Total Users</p>

              <h2 className="mt-2 text-3xl font-bold text-slate-800">540</h2>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl transition group-hover:scale-110">
              👥
            </div>
          </div>

          <p className="mt-4 text-xs font-medium text-emerald-600">
            ↑ 8.4% from last month
          </p>
        </div>

        {/* Published */}
        <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Published</p>

              <h2 className="mt-2 text-3xl font-bold text-slate-800">98</h2>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl transition group-hover:scale-110">
              ✅
            </div>
          </div>

          <p className="mt-4 text-xs font-medium text-emerald-600">
            ↑ 15% from last month
          </p>
        </div>

        {/* Pending */}
        <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Pending</p>

              <h2 className="mt-2 text-3xl font-bold text-slate-800">22</h2>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-2xl transition group-hover:scale-110">
              ⏳
            </div>
          </div>

          <p className="mt-4 text-xs font-medium text-amber-600">
            5 stories waiting
          </p>
        </div>
      </div>

      {/* Unique Welcome Banner */}
      <div className="relative mt-8 min-h-[300px] overflow-hidden rounded-3xl bg-slate-950 shadow-2xl">
        {/* Background Glow */}
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />

        <div className="absolute -bottom-32 right-10 h-80 w-80 rounded-full bg-violet-600/30 blur-3xl" />

        <div className="absolute right-1/3 top-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "35px 35px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex min-h-[300px] flex-col justify-center px-7 py-10 md:px-12">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-indigo-200 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Dashboard Overview
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Welcome back,
              <span className="block bg-gradient-to-r from-indigo-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
                Sohel! 👋
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Manage your stories, track your community and keep your dashboard
              organized from one beautiful workspace.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-50">
                View Stories →
              </button>

              <button className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
                Explore Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* Right Decorative Dashboard Card */}
        <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block">
          <div className="relative w-72 rotate-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
            {/* Mini Header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Your Activity</p>
                <p className="mt-1 text-2xl font-bold text-white">84.6%</p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/30 text-xl">
                📈
              </div>
            </div>

            {/* Fake Chart */}
            <div className="mt-6 flex h-24 items-end gap-2">
              <div className="h-[35%] flex-1 rounded-t-md bg-indigo-400/40" />
              <div className="h-[55%] flex-1 rounded-t-md bg-indigo-400/50" />
              <div className="h-[45%] flex-1 rounded-t-md bg-violet-400/50" />
              <div className="h-[75%] flex-1 rounded-t-md bg-violet-400/60" />
              <div className="h-[60%] flex-1 rounded-t-md bg-cyan-400/60" />
              <div className="h-[90%] flex-1 rounded-t-md bg-cyan-400/80" />
              <div className="h-[72%] flex-1 rounded-t-md bg-indigo-400/70" />
            </div>

            <div className="mt-4 flex justify-between text-[10px] text-slate-500">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>

          {/* Floating Notification */}
          <div className="absolute -bottom-5 -left-12 rounded-xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20">
                ✨
              </div>

              <div>
                <p className="text-xs font-semibold text-white">Great work!</p>

                <p className="text-[10px] text-slate-400">
                  12 new stories today
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute right-10 top-8 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.8)]" />

        <div className="absolute bottom-8 right-1/3 h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_15px_rgba(196,181,253,0.8)]" />
      </div>
    </div>
  );
};

export default DashboardPage;

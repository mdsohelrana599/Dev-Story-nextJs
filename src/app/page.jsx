import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section className=" w-full min-h-[400px] md:min-h-[500px] overflow-hidden rounded-3xl bg-slate-950 shadow-2xl">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950" />

        {/* Glow Effects */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-violet-500/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:40px_40px]" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[420px] md:min-h-[560px] flex-col items-center justify-center px-5 text-center">
          {/* Badge */}
          <div className="mb-5 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-indigo-200 backdrop-blur-md">
            🚀 Welcome to my developer journey
          </div>

          {/* Heading */}
          <h1 className="mb-5 text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Dev{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Story
            </span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg md:text-xl">
            Building in public • Sharing the journey •
            <br className="hidden sm:block" />
            Shipping real projects 🚀
          </p>

          {/* Button */}
          <button
            className="group rounded-full bg-white px-7 py-3.5 font-semibold
            text-slate-900 shadow-xl shadow-white/10
            transition-all duration-300
            hover:-translate-y-1 hover:bg-indigo-100
            hover:shadow-2xl hover:shadow-indigo-500/30
            active:translate-y-0"
          >
            <span className="flex items-center gap-2">
              Share-Story
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </button>

          {/* Small Stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <span>💻 Web Development</span>
            <span>⚡ Real Projects</span>
            <span>🌎 Open Journey</span>
          </div>
        </div>
      </section>
    </main>
  );
}

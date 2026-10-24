import Titel from "@/components/Titel";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Code2,
  Globe,
  Layers,
  PlayCircle,
  Rocket,
  Sparkles,
  Terminal,
} from "lucide-react";

const tutorials = [
  {
    id: 1,
    title: "HTML & CSS Fundamentals",
    category: "Frontend",
    level: "Beginner",
    description:
      "Learn the basics of HTML structure, CSS styling, layouts, and responsive web design.",
    icon: Globe,
    color: "from-orange-500 to-pink-500",
    topics: ["HTML", "CSS", "Responsive Design"],
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    category: "Programming",
    level: "Beginner",
    description:
      "Understand variables, functions, arrays, objects, DOM manipulation, and modern JavaScript.",
    icon: Code2,
    color: "from-yellow-500 to-orange-500",
    topics: ["Variables", "Functions", "DOM"],
  },
  {
    id: 3,
    title: "React Development",
    category: "Frontend",
    level: "Intermediate",
    description:
      "Build interactive interfaces using components, props, state, hooks, and reusable UI.",
    icon: Layers,
    color: "from-cyan-500 to-blue-500",
    topics: ["Components", "Hooks", "Props"],
  },
  {
    id: 4,
    title: "Next.js Fundamentals",
    category: "Full Stack",
    level: "Intermediate",
    description:
      "Explore App Router, layouts, pages, dynamic routes, navigation, and server components.",
    icon: Rocket,
    color: "from-indigo-500 to-purple-500",
    topics: ["App Router", "Layouts", "Routing"],
  },
  {
    id: 5,
    title: "Node.js & Express",
    category: "Backend",
    level: "Intermediate",
    description:
      "Learn how to create backend APIs, handle requests, manage routes, and build server applications.",
    icon: Terminal,
    color: "from-green-500 to-emerald-500",
    topics: ["Node.js", "Express", "REST API"],
  },
  {
    id: 6,
    title: "Full Stack Development",
    category: "Full Stack",
    level: "Advanced",
    description:
      "Discover how frontend, backend, databases, and authentication work together in real projects.",
    icon: BookOpen,
    color: "from-purple-500 to-pink-500",
    topics: ["MongoDB", "API", "Authentication"],
  },
];

const categories = [
  { name: "All Tutorials", count: "06", icon: BookOpen },
  { name: "Frontend", count: "03", icon: Globe },
  { name: "Backend", count: "01", icon: Terminal },
  { name: "Full Stack", count: "02", icon: Layers },
];

export default function Tutorials() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 px-3 py-8 text-white sm:px-6 sm:py-12">
      <div className="relative mx-auto max-w-7xl">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-0 top-10 h-64 w-64 rounded-full bg-indigo-600/20 blur-[100px]" />
        <div className="pointer-events-none absolute right-0 top-40 h-64 w-64 rounded-full bg-purple-600/15 blur-[100px]" />

        {/* Hero Banner */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/70 p-6 sm:p-10 lg:p-16">
          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <span className="inline-flex mb-5 items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
                <Sparkles size={16} />
                Learn · Practice · Build
              </span>

              <Titel>Welcome to Tutorials</Titel>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Learn New Skills.
                <br />
                Build Your{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Future.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                Explore developer-friendly tutorials, strengthen your
                programming fundamentals, and take the next step in your
                development journey with Dev Story.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#tutorial-list"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold transition hover:-translate-y-0.5 hover:bg-indigo-500"
                >
                  Explore Tutorials <ArrowRight size={18} />
                </a>

                <Link
                  href="/stories"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold transition hover:bg-white/10"
                >
                  Read Developer Stories
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <BookOpen size={17} className="text-indigo-400" />6 Learning
                  Topics
                </span>
                <span className="flex items-center gap-2">
                  <PlayCircle size={17} className="text-purple-400" />
                  Learn at Your Pace
                </span>
              </div>
            </div>

            {/* Decorative Learning Card */}
            <div className="hidden lg:block">
              <div className="mx-auto max-w-sm rotate-2 rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-indigo-950/40 transition duration-500 hover:rotate-0">
                <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <p className="font-bold">Developer Journey</p>
                    <p className="text-xs text-slate-500">
                      Your next chapter starts here
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  {[
                    { label: "Learn the basics", width: "w-full" },
                    { label: "Practice coding", width: "w-4/5" },
                    { label: "Build projects", width: "w-3/5" },
                  ].map((step, index) => (
                    <div key={step.label}>
                      <div className="mb-2 flex items-center gap-3 text-sm text-slate-300">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/15 text-xs text-indigo-300">
                          0{index + 1}
                        </span>
                        {step.label}
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-400 ${step.width}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 rounded-xl border border-indigo-400/10 bg-indigo-500/10 p-4 text-sm leading-6 text-indigo-200">
                  Small steps every day lead to great things.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Category Cards */}
        <section className="relative mt-10">
          <div className="mb-5">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Explore Categories
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Find tutorials that match your learning goals.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <a
                  key={category.name}
                  href="#tutorial-list"
                  className="group rounded-2xl border border-white/10 bg-slate-900/70 p-4 transition hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-slate-900 sm:p-5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400 transition group-hover:bg-indigo-500 group-hover:text-white">
                      <Icon size={21} />
                    </div>

                    <span className="text-xs text-slate-500">
                      {category.count}
                    </span>
                  </div>

                  <h3 className="mt-4 text-sm font-bold sm:text-base">
                    {category.name}
                  </h3>
                </a>
              );
            })}
          </div>
        </section>

        {/* Tutorial Grid */}
        <section id="tutorial-list" className="relative mt-12 scroll-mt-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-sm font-semibold text-indigo-400">
                START LEARNING
              </span>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Popular Tutorials
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Choose a topic and start building your knowledge.
              </p>
            </div>

            <span className="w-fit rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-xs text-slate-400">
              {tutorials.length} topics available
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {tutorials.map((tutorial) => {
              const Icon = tutorial.icon;

              return (
                <article
                  key={tutorial.id}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:shadow-xl hover:shadow-indigo-950/20 sm:p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${tutorial.color} text-white shadow-lg`}
                    >
                      <Icon size={24} />
                    </div>

                    <span className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs text-slate-400">
                      {tutorial.level}
                    </span>
                  </div>

                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-indigo-300">
                    {tutorial.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold transition group-hover:text-indigo-300">
                    {tutorial.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                    {tutorial.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {tutorial.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-lg bg-slate-800 px-2.5 py-1.5 text-xs text-slate-300"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 transition group-hover:gap-3">
                      Tutorial Coming Soon
                      <ArrowRight size={17} />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="relative mt-12 overflow-hidden rounded-3xl border border-indigo-400/20 bg-gradient-to-r from-indigo-500/15 via-purple-500/10 to-pink-500/10 p-6 text-center sm:p-10 lg:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-300">
            <Rocket size={29} />
          </div>

          <h2 className="mt-5 text-2xl font-extrabold sm:text-3xl">
            Your Next Project Starts Here
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Keep learning, keep practicing, and turn your ideas into real
            projects. Your developer journey is just getting started.
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold transition hover:bg-indigo-500"
          >
            Discover Dev Story <ArrowRight size={18} />
          </Link>
        </section>
      </div>
    </main>
  );
}

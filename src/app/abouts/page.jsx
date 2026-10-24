"use client";

import Titel from "@/components/Titel";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Code2,
  Heart,
  Sparkles,
  Users,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Share Your Story",
    description:
      "Share your learning journey, experiences, and ideas with the developer community.",
  },
  {
    icon: Code2,
    title: "Grow Your Skills",
    description:
      "Explore development topics, discover new ideas, and keep improving your skills.",
  },
  {
    icon: Users,
    title: "Build Community",
    description:
      "Connect with developers and learn from different experiences and perspectives.",
  },
];

export default function Abouts() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Hero Banner */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="absolute left-0 top-10 h-56 w-56 rounded-full bg-indigo-600/20 blur-[100px]" />
        <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-purple-600/20 blur-[110px]" />
         
         

        <div className="relative mx-auto max-w-6xl">

         

          <div className="mx-auto max-w-3xl text-center">
             
            <Titel>Welcome to About Us</Titel>

            <span className="inline-flex text-center mt-5 items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
              <Sparkles size={16} />
              Discover Dev Story
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
              Every Developer Has a{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Story to Tell.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Dev Story is a place to share your development journey, express
              your ideas, and get inspired by the experiences of other
              developers.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/stories"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold transition hover:bg-indigo-500"
              >
                Explore Stories <ArrowRight size={18} />
              </Link>

              <Link
                href="/abouts/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="mt-16 grid grid-cols-1 gap-5 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-slate-900 sm:p-8"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400 transition group-hover:bg-indigo-500 group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <h2 className="text-xl font-bold">{feature.title}</h2>
                  <p className="mt-3 leading-7 text-slate-400">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 rounded-2xl border border-indigo-400/20 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-7 text-center sm:p-10">
            <Heart className="mx-auto mb-4 text-pink-400" size={30} />

            <h2 className="text-2xl font-bold sm:text-3xl">
              Your Journey Matters
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Every project, challenge, and lesson can inspire someone else.
              Start exploring stories and become part of the journey.
            </p>

            <Link
              href="/stories"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-indigo-300 hover:text-indigo-200"
            >
              Start Exploring <ArrowRight size={17} />
            </Link>
          </div>

          {/* About Navigation */}
          <nav
            aria-label="About navigation"
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <Link
              href="/abouts"
              className="rounded-lg bg-indigo-500/15 px-4 py-2 text-sm text-indigo-300"
            >
              About
            </Link>
            <Link
              href="/abouts/contact"
              className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5"
            >
              Contact
            </Link>
            <Link
              href="/abouts/terms"
              className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5"
            >
              Terms & Conditions
            </Link>
          </nav>
        </div>
      </section>
    </main>
  );
}

import Titel from "@/components/Titel";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const SUPPORT_EMAIL = "mdsohelrana812005@gmail.com";

export default function ContactPage() {
  const subject = "Contact Dev Story";
  const body =
    "Hello Dev Story Team,\n\nI would like to contact you regarding:\n\n";

  const emailLink = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 px-3 py-8 text-white sm:px-4 sm:py-8">
      <div className="relative mx-auto max-w-5xl">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[100px]" />

        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-indigo-950/20 sm:p-10 lg:p-14">
          {/* Hero Section */}
          <div className="mx-auto max-w-3xl text-center">
            <Titel>Contact Us</Titel>

            <span className="inline-flex mt-4 items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
              <Sparkles size={16} />
              We Are Here to Help
            </span>

            <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Let's Start a{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                Conversation.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              Have a question, feedback, or an idea for Dev Story? We would love
              to hear from you.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 transition hover:border-indigo-400/30 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
                <Mail size={24} />
              </div>

              <h2 className="mt-5 text-xl font-bold">Email Support</h2>

              <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                Contact us by email for questions, feedback, or support.
              </p>

              <a
                href={emailLink}
                className="mt-5 inline-flex max-w-full break-all text-sm text-indigo-300 transition hover:text-indigo-200 hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 transition hover:border-purple-400/30 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400">
                <MessageCircle size={24} />
              </div>

              <h2 className="mt-5 text-xl font-bold">Share Feedback</h2>

              <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                Your ideas and suggestions help us improve the Dev Story
                experience for everyone.
              </p>

              <p className="mt-5 text-sm text-purple-300">
                Questions · Ideas · Suggestions
              </p>
            </div>
          </div>

          {/* Send Email CTA */}
          <div className="mt-6 rounded-2xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-6 text-center sm:mt-8 sm:p-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-300">
              <Send size={28} />
            </div>

            <h2 className="mt-5 text-xl font-bold sm:text-2xl">
              Ready to Connect?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Click the button below to open your email application with our
              email address, subject, and a starter message already filled in.
            </p>

            <a
              href={emailLink}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3.5 font-semibold shadow-lg shadow-indigo-950/30 transition hover:-translate-y-0.5 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto"
            >
              <Mail size={19} />
              Send an Email
              <Send size={17} />
            </a>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400 sm:text-sm">
              <CheckCircle2 size={16} className="text-emerald-400" />
              <span>To: {SUPPORT_EMAIL}</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/abouts"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5"
            >
              <ArrowLeft size={16} />
              Back to About
            </Link>

            <Link
              href="/abouts/terms"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5"
            >
              Terms & Conditions
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

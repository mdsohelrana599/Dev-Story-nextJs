import Link from "next/link";
import Titel from "@/components/Titel";
import { ArrowLeft, FileText, ShieldCheck } from "lucide-react";

const terms = [
  {
    title: "1. Using Dev Story",
    description:
      "Use Dev Story responsibly and follow applicable laws. Do not misuse the platform or disrupt its services.",
  },
  {
    title: "2. User Content",
    description:
      "You are responsible for the stories and content you publish. Only share content you have permission to use.",
  },
  {
    title: "3. Respectful Community",
    description:
      "Treat other users respectfully. Harassment, impersonation, and abusive behavior are not acceptable.",
  },
  {
    title: "4. Privacy and Security",
    description:
      "Keep your account information secure and review the platform's privacy policy before sharing personal information.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 sm:py-16">
      <section className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-10 lg:p-14">
        <div className="text-center">
          <div className="mx-auto flex mb-7 h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-400">
            <ShieldCheck size={30} />
          </div>

          <Titel>Terms & Conditions</Titel>

          <h1 className="mt-5 text-3xl font-extrabold sm:text-5xl">
            Our Terms of{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Service
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Please review these basic guidelines for using the Dev Story
            platform.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {terms.map((term) => (
            <article
              key={term.title}
              className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 transition hover:border-indigo-400/30 sm:p-6"
            >
              <h2 className="flex items-center gap-3 text-lg font-bold">
                <FileText className="shrink-0 text-indigo-400" size={20} />
                {term.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                {term.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm leading-7 text-slate-500">
          These are starter terms, not legal advice. Customize them for your
          actual application before publishing.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/abouts"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/5"
          >
            <ArrowLeft size={17} />
            Back to About
          </Link>

          <Link
            href="/abouts/contact"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold transition hover:bg-indigo-500"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

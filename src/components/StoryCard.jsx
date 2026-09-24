import Link from "next/link";

export default function StoryCard({ story }) {
  const shortStory = story.story.split(" ").slice(0, 20).join(" ") + "...";

  return (
    <div className="relative overflow-hidden rounded-3xl mt-4 bg-slate-950 p-6 shadow-xl border border-white/10 bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/20">
      {/* Glow Effect matching your Banner */}
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />

      {/* Image & Info */}
      <div className="relative z-10 flex items-center gap-4">
        <img
          src={story.image}
          alt={story.name}
          className="w-14 h-14 rounded-full object-cover ring-2 ring-indigo-500/40"
        />
        <div>
          <h2 className="font-bold text-white text-lg tracking-tight">
            {story.name}
          </h2>
          <p className="text-xs text-slate-400">{story.designation}</p>
          <p className="text-xs text-indigo-300 font-medium mt-0.5">
            {story.company}
          </p>
        </div>
      </div>

      {/* Story Excerpt */}
      <p className="relative z-10 mt-4 text-slate-300 text-sm leading-relaxed">
        {shortStory}
      </p>

      {/* Button styled like your Banner button */}
      <Link
        href={`/stories/${story.id}`}
        className="relative z-10 inline-flex items-center gap-2 mt-6 rounded-full bg-white px-5 py-2.5 font-semibold text-slate-900 text-xs shadow-md transition-all duration-300 hover:bg-indigo-100 hover:shadow-indigo-500/20"
      >
        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-indigo-400">
          Read Full Story
          <span> →</span>
        </span>
      </Link>
    </div>
  );
}


import Titel from "@/components/Titel";
import React from "react";

const AddStory = () => {
  return (
    <div className="min-h-screen">
      <Titel>Add Your Story</Titel>

      {/* Header */}
      <div className="mt-6 overflow-hidden rounded-3xl bg-slate-950 shadow-xl">
        <div className="relative px-6 py-8 md:px-10">
          {/* Glow */}
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-indigo-600/30 blur-3xl" />
          <div className="absolute -bottom-24 left-20 h-60 w-60 rounded-full bg-violet-600/20 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-indigo-200 backdrop-blur-md">
              ✍️ Share Your Experience
            </div>

            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Tell the world your story
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              Every story has something special to tell. Add your experience,
              memories and thoughts to inspire others.
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Main Form */}
        <div className="space-y-6 lg:col-span-2">
          {/* Basic Information */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-800">
                Story Information
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Start with the basic information about your story.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {/* Title */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Story Title
                </label>

                <input
                  type="text"
                  placeholder="Enter an interesting story title..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-black text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Category */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Category
                </label>

                <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-black text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10">
                  <option value="">Select category</option>
                  <option>Adventure</option>
                  <option>Love</option>
                  <option>Travel</option>
                  <option>Life</option>
                  <option>Success</option>
                  <option>Family</option>
                  <option>Friendship</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Location
                </label>

                <input
                  type="text"
                  placeholder="e.g. Dhaka, Bangladesh"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-black text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Author */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Author Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-black outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Image */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Cover Image URL
                </label>

                <input
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none text-black transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Short Description */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Short Description
                </label>

                <textarea
                  rows="3"
                  placeholder="Write a short introduction to your story..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 text-black py-3.5 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>
            </div>
          </div>

          {/* Story Content */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-800">
                Your Story
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Share your complete experience with the community.
              </p>
            </div>

            <textarea
              rows="12"
              placeholder="Once upon a time..."
              className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-black outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
            />

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Tags
              </label>

              <input
                type="text"
                placeholder="travel, adventure, memories..."
                className="w-full rounded-xl border border-slate-200 text-black bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
              />

              <p className="mt-2 text-xs text-slate-400">
                Separate multiple tags with commas.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              Save Draft
            </button>

            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 transition duration-300 hover:-translate-y-0.5 hover:from-indigo-700 hover:to-violet-700"
            >
              Publish Story 🚀
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Story Preview */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-200">
                Story Preview
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Your story will appear here
              </h3>

              <p className="mt-3 text-sm leading-6 text-indigo-100">
                Add your story details and publish it for everyone to
                discover.
              </p>
            </div>

            <div className="space-y-4 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
                  👤
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Your Name
                  </p>

                  <p className="text-xs text-slate-400">
                    Story Author
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
                  Adventure
                </span>

                <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-600">
                  Life
                </span>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="rounded-3xl border border-indigo-100 bg-indigo-50 p-6">
            <h3 className="font-bold text-indigo-900">
              💡 Story Writing Tips
            </h3>

            <ul className="mt-4 space-y-3 text-sm leading-6 text-indigo-800">
              <li>✓ Choose a memorable title.</li>
              <li>✓ Start with an interesting introduction.</li>
              <li>✓ Keep your paragraphs easy to read.</li>
              <li>✓ Add a meaningful conclusion.</li>
              <li>✓ Use relevant tags to reach more readers.</li>
            </ul>
          </div>

          {/* Privacy */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex gap-3">
              <div className="text-xl">🔒</div>

              <div>
                <h4 className="font-semibold text-slate-800">
                  Your Privacy
                </h4>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Your information will be handled securely. You can save
                  your story as a draft before publishing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStory;


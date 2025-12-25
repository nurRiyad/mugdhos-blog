import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] pt-28 pb-20 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-12">
          <p className="text-sm font-semibold text-blue-600">404</p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Page not found
          </h1>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist (or it moved). Let&apos;s get you back on track.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              Back to Home
            </Link>
            <Link
              href="/blogs"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-700 font-semibold border-2 border-slate-200 hover:border-slate-300 transition-all"
            >
              View Blogs
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}



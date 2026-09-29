import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#080b12] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-2xl shadow-black/30 text-center">
        <div className="text-xs font-mono uppercase tracking-[0.35em] text-primary/80">404</div>
        <h1 className="mt-6 text-5xl font-display font-bold tracking-[-0.06em]">Page not found</h1>
        <p className="mt-4 text-lg text-gray-400">
          Looks like this page got lost.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
        >
          <span>Back to Home</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;

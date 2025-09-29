export default function EmailSignup() {
  return (
    <div className="mb-10">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
        <p className="text-blue-600 font-semibold mb-4 text-lg flex items-center justify-center lg:justify-start gap-2">
          <span className="text-xl">🔔</span>
          Be the first to know when we launch!
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-6 py-4 rounded-xl bg-white/90 border-2 border-blue-200 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all shadow-md"
          />
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-lg whitespace-nowrap">
            🎯 Notify Me!
          </button>
        </div>
      </div>
    </div>
  );
}

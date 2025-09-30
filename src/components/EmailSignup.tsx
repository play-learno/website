export default function EmailSignup() {
  return (
    <div className="mb-10">
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-orange-200/50">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-orange-800 mb-2 font-['Comic_Sans_MS','Trebuchet_MS',cursive]">
            Join the Adventure!
          </h3>
          <p className="text-orange-700 font-semibold text-lg flex items-center justify-center gap-2">
            <span className="text-2xl">🎉</span>
            Be the first to discover our magical books!
            <span className="text-2xl">✨</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-6 py-4 rounded-2xl bg-white/90 border-3 border-orange-200 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-3 focus:ring-orange-300 focus:border-orange-400 transition-all shadow-lg text-lg font-medium"
          />
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-2xl transition-all transform hover:scale-105 active:scale-95 shadow-xl whitespace-nowrap text-lg border-2 border-orange-400">
            <span className="flex items-center gap-2">🚀 Join Waitlist</span>
          </button>
        </div>

        <p className="text-center text-sm text-slate-600 mt-4 flex items-center justify-center gap-2">
          <span role="img" aria-label="lock">
            🔒
          </span>
          We respect your privacy. No spam, just book updates!
        </p>
      </div>
    </div>
  );
}

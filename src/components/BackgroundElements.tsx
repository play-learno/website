export default function BackgroundElements() {
  return (
    <>
      {/* Kid-friendly background elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Large floating bubbles */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-orange-300/20 to-yellow-300/20 rounded-full blur-3xl animate-pulse rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-amber-300/20 to-orange-300/20 rounded-full blur-3xl animate-pulse delay-700 -rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-300/15 to-amber-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Additional colorful shapes */}
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-red-200/30 to-pink-200/30 rounded-3xl blur-2xl animate-pulse delay-500 rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-gradient-to-br from-green-200/25 to-teal-200/25 rounded-3xl blur-2xl animate-pulse delay-1200 -rotate-45"></div>
      </div>

      {/* Floating kid-themed elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated dots representing learning sparkles */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-orange-400 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-1/2 right-1/5 w-2 h-2 bg-amber-500 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-orange-500 rounded-full animate-ping delay-1500"></div>
        <div className="absolute top-2/3 left-1/2 w-2 h-2 bg-red-400 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/5 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-2500"></div>

        {/* Larger floating elements */}
        <div className="absolute top-10 right-1/3 w-4 h-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-float-delayed opacity-50"></div>
        <div className="absolute top-1/3 left-10 w-5 h-5 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full animate-float opacity-40"></div>
      </div>

      {/* Educational themed decorative corner */}
      <div className="absolute bottom-8 right-8 hidden lg:block opacity-20">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-300/30 to-yellow-300/30 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
          <div className="relative w-32 h-32 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl shadow-lg border-2 border-white/70 flex items-center justify-center">
            <div className="text-4xl">📚</div>
          </div>
        </div>
      </div>
    </>
  );
}

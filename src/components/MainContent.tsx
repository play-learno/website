import EmailSignup from "./EmailSignup";
import SocialLinks from "./SocialLinks";

export default function MainContent() {
  return (
    <div className="flex-1 max-w-2xl text-center lg:text-left">
      {/* Logo/Brand */}
      <div className="mb-8 relative">
        {/* Glow effect behind text */}
        <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-600/30 via-pink-600/30 to-blue-500/30 animate-pulse"></div>

        {/* Main title with enhanced effects */}
        <div className="relative">
          <h1 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-blue-600 via-pink-600 to-blue-500 bg-clip-text text-transparent mb-4 animate-pulse drop-shadow-lg">
            Play Learno
          </h1>

          {/* Decorative underline */}
          <div className="w-32 lg:w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full mx-auto lg:mx-0 mb-4 animate-pulse"></div>
        </div>

        <div className="text-xl lg:text-2xl font-semibold text-gray-700 flex items-center justify-center lg:justify-start gap-2">
          <span className="text-2xl animate-bounce">🌟</span>
          <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent font-bold">
            Kids Books & Learning Adventures
          </span>
          <span className="text-2xl animate-bounce delay-500">📖</span>
        </div>
      </div>

      {/* Coming Soon Text */}
      <div className="mb-10">
        <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-6 tracking-wide">
          Coming Soon
        </h2>
        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
          Magical books and fun learning activities for little ones aged 2-6!
          Get ready for stories, games, and educational adventures that make
          learning joyful!
        </p>
      </div>

      {/* Email Signup Form */}
      <EmailSignup />

      {/* Social Media Links */}
      <SocialLinks />

      {/* Progress indicator */}
      <div className="text-center lg:text-left">
        <p className="text-gray-500 mb-4 text-sm flex items-center justify-center lg:justify-start gap-2">
          <span className="text-base">🎨</span>
          Creating something magical...
        </p>
        <div className="flex justify-center lg:justify-start items-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200"></div>
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-300"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-400"></div>
        </div>
      </div>
    </div>
  );
}

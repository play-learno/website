import EmailSignup from "./EmailSignup";
import SocialLinks from "./SocialLinks";

export default function MainContent() {
  return (
    <article className="flex-1 max-w-2xl text-center lg:text-left" itemScope itemType="https://schema.org/WebPage">
      {/* Logo/Brand */}
      <header className="mb-8 relative">
        {/* Glow effect behind text */}
        <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-cyan-600/20 animate-pulse"></div>

        {/* Main title with enhanced effects */}
        <div className="relative">
          <h1 
            className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4 drop-shadow-lg"
            itemProp="name"
          >
            Play Learno
          </h1>

          {/* Decorative underline */}
          <div className="w-32 lg:w-48 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto lg:mx-0 mb-4"></div>
        </div>

        <p 
          className="text-xl lg:text-2xl font-semibold text-slate-700 flex items-center justify-center lg:justify-start gap-2"
          itemProp="description"
        >
          <span className="text-2xl" role="img" aria-label="star">🌟</span>
          <span className="bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent font-bold">
            Kids Books & Learning Adventures
          </span>
          <span className="text-2xl" role="img" aria-label="book">📖</span>
        </p>
      </header>

      {/* Coming Soon Text */}
      <section className="mb-10">
        <h2 className="text-3xl lg:text-4xl font-light text-slate-800 mb-6 tracking-wide">
          Coming Soon
        </h2>
        <p className="text-lg lg:text-xl text-slate-600 leading-relaxed" itemProp="about">
          Thoughtfully crafted books and educational activities for children
          aged 2-6. Discover stories, interactive learning, and adventures
          designed with child development in mind.
        </p>
      </section>

      {/* Email Signup Form */}
      <section className="mb-8">
        <EmailSignup />
      </section>

      {/* Social Media Links */}
      <section className="mb-8">
        <SocialLinks />
      </section>

      {/* Progress indicator */}
      <footer className="text-center lg:text-left">
        <p className="text-slate-500 mb-4 text-sm flex items-center justify-center lg:justify-start gap-2">
          <span className="text-base" role="img" aria-label="sparkles">✨</span>
          Crafting something special...
        </p>
        <div className="flex justify-center lg:justify-start items-center space-x-2" role="progressbar" aria-label="Development progress">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-300"></div>
          <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce delay-400"></div>
        </div>
      </footer>
    </article>
  );
}

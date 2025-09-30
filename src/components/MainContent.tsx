import EmailSignup from "./EmailSignup";
import SocialLinks from "./SocialLinks";
import Image from "next/image";

export default function MainContent() {
  return (
    <article
      className="flex-1 max-w-4xl text-center"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      {/* Logo/Brand */}
      <header className="mb-12 relative">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-orange-300/30 via-yellow-300/30 to-amber-300/30 animate-pulse rounded-full scale-110"></div>

            {/* Logo container */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-orange-100/50 group-hover:scale-105 transition-all duration-300">
              <Image
                src="/play-learno-logo.svg"
                alt="Play Learno - Educational Books for Kids"
                width={200}
                height={120}
                className="w-auto h-20 lg:h-24"
                priority
              />
            </div>
          </div>
        </div>

        {/* Brand tagline */}
        <div className="relative">
          <h1
            className="text-4xl lg:text-6xl font-black bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent mb-6 drop-shadow-lg font-['Comic_Sans_MS','Trebuchet_MS',cursive]"
            itemProp="name"
          >
            Where Learning Meets Play!
          </h1>

          {/* Decorative elements */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div>
            <span className="text-3xl animate-bounce">🎯</span>
            <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full"></div>
          </div>
        </div>

        <p
          className="text-xl lg:text-2xl font-semibold text-slate-700 flex items-center justify-center gap-3 flex-wrap"
          itemProp="description"
        >
          <span className="text-2xl" role="img" aria-label="books">
            📚
          </span>
          <span className="bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent font-bold">
            Educational Books & Activities for Kids
          </span>
          <span className="text-2xl" role="img" aria-label="children">
            �
          </span>
        </p>
      </header>

      {/* Coming Soon Section */}
      <section className="mb-12 relative">
        {/* Floating elements */}
        <div className="absolute -top-4 left-1/4 text-4xl animate-float">
          🌟
        </div>
        <div className="absolute -top-2 right-1/4 text-3xl animate-float-delayed">
          🎈
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8 lg:p-12 shadow-xl border border-orange-100">
          <h2 className="text-4xl lg:text-5xl font-bold text-orange-800 mb-6 tracking-wide font-['Comic_Sans_MS','Trebuchet_MS',cursive]">
            Something Amazing is Coming Soon!
          </h2>

          <div className="max-w-3xl mx-auto">
            <p
              className="text-xl lg:text-2xl text-slate-700 leading-relaxed mb-6"
              itemProp="about"
            >
              We&apos;re crafting{" "}
              <span className="font-bold text-orange-700">magical books</span>{" "}
              and
              <span className="font-bold text-amber-700">
                {" "}
                interactive learning adventures
              </span>{" "}
              for little explorers aged{" "}
              <span className="bg-yellow-200 px-2 py-1 rounded-full font-bold">
                2-6 years
              </span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/70 rounded-2xl p-6 shadow-lg">
                <span className="text-4xl mb-3 block">📖</span>
                <h3 className="font-bold text-orange-800 mb-2">
                  Engaging Stories
                </h3>
                <p className="text-sm text-slate-600">
                  Tales that spark imagination and curiosity
                </p>
              </div>

              <div className="bg-white/70 rounded-2xl p-6 shadow-lg">
                <span className="text-4xl mb-3 block">🧠</span>
                <h3 className="font-bold text-orange-800 mb-2">
                  Smart Learning
                </h3>
                <p className="text-sm text-slate-600">
                  Educational content based on child development
                </p>
              </div>

              <div className="bg-white/70 rounded-2xl p-6 shadow-lg">
                <span className="text-4xl mb-3 block">🎨</span>
                <h3 className="font-bold text-orange-800 mb-2">
                  Interactive Fun
                </h3>
                <p className="text-sm text-slate-600">
                  Activities that make learning an adventure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup Form */}
      <section className="mb-10">
        <EmailSignup />
      </section>

      {/* Social Media Links */}
      <section className="mb-10">
        <SocialLinks />
      </section>

      {/* Progress indicator */}
      <footer className="text-center">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100/50">
          <p className="text-slate-600 mb-4 text-lg flex items-center justify-center gap-2 font-medium">
            <span className="text-2xl" role="img" aria-label="sparkles">
              ✨
            </span>
            Our team of authors and educators are working hard behind the
            scenes...
            <span className="text-2xl" role="img" aria-label="sparkles">
              ✨
            </span>
          </p>

          <div
            className="flex justify-center items-center space-x-3 mb-4"
            role="progressbar"
            aria-label="Development progress"
          >
            <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-200"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce delay-300"></div>
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-bounce delay-400"></div>
          </div>

          <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
            <span role="img" aria-label="target">
              🎯
            </span>
            Expected Launch: Early 2026
            <span role="img" aria-label="calendar">
              📅
            </span>
          </p>
        </div>
      </footer>
    </article>
  );
}

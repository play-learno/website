interface SocialLinkProps {
  href: string;
  bgGradient: string;
  hoverGradient: string;
  iconColor: string;
  hoverIconColor: string;
  borderColor: string;
  children: React.ReactNode;
  label: string;
}

function SocialLink({
  href,
  bgGradient,
  hoverGradient,
  iconColor,
  hoverIconColor,
  borderColor,
  children,
  label,
}: SocialLinkProps) {
  return (
    <div className="text-center">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-block"
      >
        <div
          className={`w-16 h-16 ${bgGradient} rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 ${borderColor} group-hover:scale-110 ${hoverGradient} transition-all duration-300 shadow-xl group-hover:shadow-2xl`}
        >
          <svg
            className={`w-8 h-8 ${iconColor} ${hoverIconColor} transition-colors`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {children}
          </svg>
        </div>
      </a>
      <p className="mt-2 text-sm font-medium text-slate-600">{label}</p>
    </div>
  );
}

export default function SocialLinks() {
  return (
    <div className="mb-8">
      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-lg border border-orange-100">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-orange-800 mb-2 font-['Comic_Sans_MS','Trebuchet_MS',cursive]">
            Join Our Learning Community!
          </h3>
          <p className="text-gray-600 text-lg font-medium flex items-center justify-center gap-2">
            <span className="text-2xl">👨‍👩‍👧‍👦</span>
            Follow our journey and get sneak peeks of what&apos;s coming!
            <span className="text-2xl">🎉</span>
          </p>
        </div>

        <div className="flex justify-center space-x-8">
          {/* Instagram */}
          <SocialLink
            href="https://instagram.com/playlearno"
            bgGradient="bg-gradient-to-br from-pink-100 to-purple-100"
            hoverGradient="group-hover:bg-gradient-to-br group-hover:from-pink-200 group-hover:to-purple-200"
            iconColor="text-pink-600"
            hoverIconColor="group-hover:text-pink-700"
            borderColor="border-pink-300"
            label="@play.learno"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </SocialLink>

          {/* YouTube */}
          <SocialLink
            href="https://youtube.com/@play.learno"
            bgGradient="bg-gradient-to-br from-red-100 to-orange-100"
            hoverGradient="group-hover:bg-gradient-to-br group-hover:from-red-200 group-hover:to-orange-200"
            iconColor="text-red-600"
            hoverIconColor="group-hover:text-red-700"
            borderColor="border-red-300"
            label="Play Learno"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </SocialLink>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
            <span role="img" aria-label="bell">
              🔔
            </span>
            Turn on notifications to never miss an update!
          </p>
        </div>
      </div>
    </div>
  );
}

interface SocialLinkProps {
  href: string;
  bgGradient: string;
  hoverGradient: string;
  iconColor: string;
  hoverIconColor: string;
  borderColor: string;
  children: React.ReactNode;
}

function SocialLink({
  href,
  bgGradient,
  hoverGradient,
  iconColor,
  hoverIconColor,
  borderColor,
  children,
}: SocialLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group">
      <div
        className={`w-12 h-12 ${bgGradient} rounded-xl flex items-center justify-center backdrop-blur-sm border ${borderColor} group-hover:scale-110 ${hoverGradient} transition-all duration-300 shadow-lg`}
      >
        <svg
          className={`w-6 h-6 ${iconColor} ${hoverIconColor} transition-colors`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          {children}
        </svg>
      </div>
    </a>
  );
}

export default function SocialLinks() {
  return (
    <div className="mb-8">
      <p className="text-gray-600 mb-4 text-base font-medium flex items-center justify-center lg:justify-start gap-2">
        <span className="text-lg">👨‍👩‍👧‍👦</span>
        Follow our journey!
      </p>
      <div className="flex justify-center lg:justify-start space-x-4">
        {/* Instagram */}
        <SocialLink
          href="https://instagram.com/play.learno"
          bgGradient="bg-gradient-to-br from-pink-400/30 to-blue-400/30"
          hoverGradient="group-hover:bg-gradient-to-br group-hover:from-pink-400/50 group-hover:to-blue-400/50"
          iconColor="text-pink-600"
          hoverIconColor="group-hover:text-pink-700"
          borderColor="border-pink-200/50"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </SocialLink>

        {/* YouTube */}
        <SocialLink
          href="https://youtube.com/playlearno"
          bgGradient="bg-gradient-to-br from-blue-400/30 to-pink-400/30"
          hoverGradient="group-hover:bg-gradient-to-br group-hover:from-blue-400/50 group-hover:to-pink-400/50"
          iconColor="text-blue-600"
          hoverIconColor="group-hover:text-blue-700"
          borderColor="border-blue-200/50"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </SocialLink>
      </div>
    </div>
  );
}

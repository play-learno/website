import Image from "next/image";

export default function BackgroundElements() {
  return (
    <>
      {/* Modern background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-pink-400/20 rounded-3xl blur-3xl animate-pulse rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-3xl blur-3xl animate-pulse delay-700 -rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Additional decorative image */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-pink-400/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
          <Image
            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
            alt="Happy child learning"
            width={128}
            height={128}
            className="relative w-32 h-32 object-cover rounded-2xl shadow-lg border-2 border-white/50"
          />
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-1/2 right-1/5 w-1 h-1 bg-blue-500 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-pink-500 rounded-full animate-ping delay-1500"></div>
      </div>
    </>
  );
}

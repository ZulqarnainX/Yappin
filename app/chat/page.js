'use client'

 export default function ChatComingSoon() {
  return (
    <div className="h-[91.7vh] overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200">
      <div className="text-center animate-fade-in px-4">
        <div className="text-4xl md:text-6xl mb-4">💬</div>
        <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-blue-900 mb-2">
          Chat Feature Coming Soon
        </h1>
        <p className="text-sm md:text-base text-blue-700">
          We're building private messaging just for you. Stay tuned!
        </p>
        <p className="text-sm md:text-base text-blue-700">
          Use <a className="underline font-semibold text-blue-900" href="/forums">Forums</a> Instead ?
        </p>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

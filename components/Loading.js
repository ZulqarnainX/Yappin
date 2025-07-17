import React from 'react';

// Main App component
export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative"> {/* Added 'relative' for absolute positioning of text */}
      <Loading />
    </div>
  );
}

// LoadingComponent
const Loading = () => {
  return (
    <>
      {/* Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          src="./logo.png" // Placeholder for the Yappin logo
          alt="Yappin Logo"
          className="w-32 h-32 object-contain animate-fade-pulse" // Animation class remains for logo
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/120x120/CCCCCC/000000?text=Logo+Error"; }}
        />
      </div>

      {/* Tagline*/}
      <p className="absolute bottom-8 left-0 right-0 text-center text-xl font-semibold text-gray-700 tracking-wide">
        Yappin - Build For Talkers
      </p>

      {/* custom animation keyframes */}
      <style jsx>{`
        @keyframes fade-pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4; /* Subtle fade */
          }
        }

        .animate-fade-pulse {
          animation: fade-pulse 1.5s infinite ease-in-out; /* Adjusted duration */
        }
      `}</style>
    </>
  );
};
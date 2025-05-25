const DecorativeElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating spirals */}
      <div className="absolute top-20 left-10 w-8 h-8 opacity-30">
        <svg
          className="w-full h-full animate-spiral"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M16 4C20 4 24 8 24 12C24 16 20 20 16 20C12 20 8 16 8 12C8 10 9 8 11 7"
            stroke="#8FBC8F"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="absolute top-32 right-20 w-6 h-6 opacity-20">
        <svg
          className="w-full h-full animate-spiral"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="#EA5A52"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="absolute top-60 left-1/3 w-10 h-10 opacity-25">
        <svg
          className="w-full h-full animate-spiral"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M20 8C24 8 28 12 28 16C28 20 24 24 20 24C16 24 12 20 12 16C12 14 13 12 15 11"
            stroke="#8FBC8F"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Decorative lines - top */}
      <div className="absolute top-0 left-0 w-full h-32">
        <svg className="w-full h-full" viewBox="0 0 1400 200" fill="none">
          <path
            d="M0 100 Q350 80 700 100 T1400 100"
            stroke="#2C2C2C"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0 120 Q350 100 700 120 T1400 120"
            stroke="#2C2C2C"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* Decorative lines - bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32">
        <svg className="w-full h-full" viewBox="0 0 1400 200" fill="none">
          <path
            d="M0 100 Q350 120 700 100 T1400 100"
            stroke="#2C2C2C"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0 80 Q350 100 700 80 T1400 80"
            stroke="#2C2C2C"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default DecorativeElements;

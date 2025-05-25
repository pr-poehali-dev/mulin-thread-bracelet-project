const CrabIllustration = () => {
  return (
    <div className="relative flex justify-center items-center animate-float">
      <svg
        width="120"
        height="80"
        viewBox="0 0 120 80"
        fill="none"
        className="drop-shadow-lg"
      >
        {/* Crab body */}
        <ellipse cx="60" cy="50" rx="25" ry="15" fill="#EA5A52" />

        {/* Left claw */}
        <path
          d="M25 35 Q20 30 15 35 Q10 40 15 45 Q20 50 25 45 L35 40 Z"
          fill="#EA5A52"
        />

        {/* Right claw */}
        <path
          d="M95 35 Q100 30 105 35 Q110 40 105 45 Q100 50 95 45 L85 40 Z"
          fill="#EA5A52"
        />

        {/* Eyes */}
        <circle cx="52" cy="42" r="3" fill="#2C2C2C" />
        <circle cx="68" cy="42" r="3" fill="#2C2C2C" />
        <circle cx="53" cy="41" r="1" fill="white" />
        <circle cx="69" cy="41" r="1" fill="white" />

        {/* Smile */}
        <path
          d="M55 52 Q60 56 65 52"
          stroke="#2C2C2C"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Legs */}
        <line
          x1="45"
          y1="60"
          x2="40"
          y2="70"
          stroke="#EA5A52"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="50"
          y1="62"
          x2="45"
          y2="72"
          stroke="#EA5A52"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="70"
          y1="62"
          x2="75"
          y2="72"
          stroke="#EA5A52"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="75"
          y1="60"
          x2="80"
          y2="70"
          stroke="#EA5A52"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default CrabIllustration;

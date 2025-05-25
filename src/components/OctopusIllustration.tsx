const OctopusIllustration = () => {
  return (
    <div className="relative flex justify-center items-center animate-float">
      <svg
        width="140"
        height="120"
        viewBox="0 0 140 120"
        fill="none"
        className="drop-shadow-lg"
      >
        {/* Octopus head */}
        <ellipse cx="70" cy="40" rx="30" ry="25" fill="#EA5A52" />

        {/* Eyes */}
        <circle cx="62" cy="35" r="4" fill="#2C2C2C" />
        <circle cx="78" cy="35" r="4" fill="#2C2C2C" />
        <circle cx="63" cy="34" r="1.5" fill="white" />
        <circle cx="79" cy="34" r="1.5" fill="white" />

        {/* Cute smile */}
        <path
          d="M65 45 Q70 49 75 45"
          stroke="#2C2C2C"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Tentacle 1 - left curved */}
        <path
          d="M50 55 Q45 65 40 75 Q35 85 30 95 Q25 105 35 110"
          stroke="#EA5A52"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: "0.2s" }}
        />

        {/* Tentacle 2 - left middle */}
        <path
          d="M60 60 Q50 70 45 80 Q40 90 35 100 Q30 110 40 115"
          stroke="#EA5A52"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: "0.4s" }}
        />

        {/* Tentacle 3 - right middle */}
        <path
          d="M80 60 Q90 70 95 80 Q100 90 105 100 Q110 110 100 115"
          stroke="#EA5A52"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: "0.6s" }}
        />

        {/* Tentacle 4 - right curved */}
        <path
          d="M90 55 Q95 65 100 75 Q105 85 110 95 Q115 105 105 110"
          stroke="#EA5A52"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: "0.8s" }}
        />

        {/* Tentacle 5 - center left */}
        <path
          d="M65 58 Q55 75 50 90 Q45 105 55 112"
          stroke="#EA5A52"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Tentacle 6 - center right */}
        <path
          d="M75 58 Q85 75 90 90 Q95 105 85 112"
          stroke="#EA5A52"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: "1.2s" }}
        />

        {/* Small suction cups on tentacles */}
        <circle cx="32" cy="98" r="2" fill="#D44A42" />
        <circle cx="38" cy="103" r="2" fill="#D44A42" />
        <circle cx="52" cy="95" r="2" fill="#D44A42" />
        <circle cx="88" cy="95" r="2" fill="#D44A42" />
        <circle cx="102" cy="103" r="2" fill="#D44A42" />
        <circle cx="108" cy="98" r="2" fill="#D44A42" />

        {/* Small hearts floating around */}
        <text
          x="20"
          y="25"
          fontSize="8"
          fill="#FF69B4"
          className="animate-pulse"
        >
          ♡
        </text>
        <text
          x="115"
          y="30"
          fontSize="8"
          fill="#FF69B4"
          className="animate-pulse"
          style={{ animationDelay: "0.5s" }}
        >
          ♡
        </text>
        <text
          x="10"
          y="70"
          fontSize="6"
          fill="#FF69B4"
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          ♡
        </text>
      </svg>
    </div>
  );
};

export default OctopusIllustration;

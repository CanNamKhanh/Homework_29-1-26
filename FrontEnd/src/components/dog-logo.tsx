import { NavLink } from "react-router-dom";

export function DogLogo() {
  return (
    <NavLink to={"/"} className="flex justify-center mb-8 animate-float-bounce">
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Head */}
        <circle cx="40" cy="35" r="20" fill="#1e3a5f" />

        {/* Left Ear */}
        <path d="M 20 20 Q 15 10 18 5 Q 22 8 25 15 Z" fill="#1e3a5f" />

        {/* Right Ear */}
        <path d="M 60 20 Q 65 10 62 5 Q 58 8 55 15 Z" fill="#1e3a5f" />

        {/* Left Eye */}
        <circle cx="32" cy="30" r="3" fill="white" />
        <circle cx="32" cy="30" r="1.5" fill="#1e3a5f" />

        {/* Right Eye */}
        <circle cx="48" cy="30" r="3" fill="white" />
        <circle cx="48" cy="30" r="1.5" fill="#1e3a5f" />

        {/* Nose */}
        <ellipse cx="40" cy="38" rx="2.5" ry="3" fill="#1e3a5f" />

        {/* Mouth */}
        <path
          d="M 40 38 Q 35 42 32 40"
          stroke="#1e3a5f"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 40 38 Q 45 42 48 40"
          stroke="#1e3a5f"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Tongue */}
        <ellipse cx="40" cy="45" rx="3" ry="4" fill="#f59e0b" />

        {/* Body */}
        <rect x="30" y="53" width="20" height="22" rx="8" fill="#1e3a5f" />

        {/* Left Front Paw */}
        <rect x="28" y="73" width="4" height="6" rx="2" fill="#1e3a5f" />

        {/* Right Front Paw */}
        <rect x="48" y="73" width="4" height="6" rx="2" fill="#1e3a5f" />

        {/* Tail Accent */}
        <circle cx="35" cy="50" r="3" fill="#f59e0b" opacity="0.6" />
      </svg>
    </NavLink>
  );
}

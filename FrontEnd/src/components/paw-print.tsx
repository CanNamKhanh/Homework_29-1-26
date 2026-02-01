interface PawPrintProps {
  className?: string;
  delay?: number;
}

export function PawPrint({ className = "", delay = 0 }: PawPrintProps) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`opacity-20 ${className}`}
      style={{
        animation: `float-bounce 4s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {/* Center Pad */}
      <ellipse cx="30" cy="35" rx="8" ry="10" fill="#1e3a5f" />

      {/* Top Left Toe */}
      <ellipse cx="12" cy="15" rx="6" ry="8" fill="#1e3a5f" />

      {/* Top Center Left Toe */}
      <ellipse cx="24" cy="8" rx="6" ry="8" fill="#1e3a5f" />

      {/* Top Center Right Toe */}
      <ellipse cx="36" cy="8" rx="6" ry="8" fill="#1e3a5f" />

      {/* Top Right Toe */}
      <ellipse cx="48" cy="15" rx="6" ry="8" fill="#1e3a5f" />
    </svg>
  );
}

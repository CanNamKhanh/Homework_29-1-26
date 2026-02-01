"use client";

export function AnimatedBackground() {
  return (
    <>
      {/* Animated gradient overlay */}
      <div
        className="fixed inset-0 -z-30"
        style={{
          background:
            "linear-gradient(-45deg, #1e3a5f, #2d5a8c, #3d7aac, #1e3a5f)",
          backgroundSize: "400% 400%",
          animation: "gradient-shift 15s ease infinite",
        }}
      />

      {/* Wave bottom layer */}
      <div
        className="fixed bottom-0 left-0 w-full h-48 -z-20 opacity-20 animate-wave"
        style={{
          background:
            "url(\"data:image/svg+xml,%3Csvg width='1200' height='100' viewBox='0 0 1200 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,50 Q300,0 600,50 T1200,50 L1200,100 L0,100 Z' fill='%235ba3d0' opacity='0.5'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat-x",
          backgroundSize: "600px 100px",
          animation: "wave 8s linear infinite",
        }}
      />

      {/* Animated floating circles */}
      <div className="fixed inset-0 -z-25 overflow-hidden pointer-events-none">
        {/* Large blue circle top left */}
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30 blur-3xl animate-float-left-right"
          style={{
            background:
              "radial-gradient(circle, rgba(45, 90, 140, 0.8), rgba(30, 58, 95, 0.2))",
          }}
        />

        {/* Large blue circle bottom right */}
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-25 blur-3xl animate-float-right-left"
          style={{
            background:
              "radial-gradient(circle, rgba(61, 122, 172, 0.6), rgba(45, 90, 140, 0.1))",
            animationDelay: "2s",
          }}
        />

        {/* Medium circle center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-15 blur-3xl animate-float-bounce"
          style={{
            background:
              "radial-gradient(circle, rgba(91, 163, 208, 0.4), rgba(30, 58, 95, 0.1))",
            animationDelay: "1s",
          }}
        />

        {/* Small accent circle */}
        <div
          className="absolute top-1/3 right-1/4 w-56 h-56 rounded-full opacity-20 blur-2xl animate-pulse-glow"
          style={{
            background:
              "radial-gradient(circle, rgba(117, 147, 86, 0.5), rgba(30, 58, 95, 0.1))",
          }}
        />
      </div>

      {/* Decorative grid pattern overlay */}
      <div
        className="fixed inset-0 -z-20 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(0deg, transparent 24%, rgba(30, 58, 95, 0.05) 25%, rgba(30, 58, 95, 0.05) 26%, transparent 27%, transparent 74%, rgba(30, 58, 95, 0.05) 75%, rgba(30, 58, 95, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(30, 58, 95, 0.05) 25%, rgba(30, 58, 95, 0.05) 26%, transparent 27%, transparent 74%, rgba(30, 58, 95, 0.05) 75%, rgba(30, 58, 95, 0.05) 76%, transparent 77%, transparent)",
          backgroundSize: "60px 60px",
        }}
      />
    </>
  );
}

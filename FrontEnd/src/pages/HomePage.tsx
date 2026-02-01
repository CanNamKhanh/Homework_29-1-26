"use client";

import { AnimatedBackground } from "@/components/animated-background";
import { PawPrint } from "@/components/paw-print";
import { handleGetUser } from "@/services/authService";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface UserInfo {
  fullName: string;
  email: string;
}

function HomePage() {
  const email = localStorage.getItem("email");
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    if (!email) return;

    const fetchUser = async () => {
      const user = await handleGetUser(email);

      setUserInfo(user.data);
    };

    fetchUser();
  }, [email]);

  //   console.log(userInfo);

  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center py-8 px-4 z-9999999">
        {/* Decorative Paw Prints */}
        <div className="absolute top-20 left-10 -z-10">
          <PawPrint delay={0} />
        </div>
        <div
          className="absolute top-40 right-20 -z-10"
          style={{ transform: "scaleX(-1)" }}
        >
          <PawPrint delay={0.5} />
        </div>
        <div className="absolute bottom-32 left-1/4 -z-10">
          <PawPrint delay={1} />
        </div>
        <div
          className="absolute bottom-20 right-1/3 -z-10"
          style={{ transform: "scaleX(-1)" }}
        >
          <PawPrint delay={1.5} />
        </div>

        {/* Main Content */}
        <div
          className={`text-center z-10 transition-all duration-1000 opacity-100 scale-100`}
        >
          {/* Greeting Text */}
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 text-balance drop-shadow-lg">
              Xin chào
            </h1>
            <div className="h-1 w-24 bg-white/40 mx-auto rounded-full" />
          </div>

          {/* Name Section */}
          <div
            className="my-12 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-5xl md:text-6xl font-bold text-white mb-2 drop-shadow-lg">
              {userInfo?.fullName}
            </p>
            <p className="text-xl md:text-2xl text-white/80 font-light tracking-widest">
              Welcome to the dog-themed world
            </p>
          </div>

          {/* Decorative Line */}
          <div
            className="flex items-center justify-center gap-4 my-12 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="h-px w-12 bg-white/30" />
            <div className="w-2 h-2 rounded-full bg-white/50" />
            <div className="h-px w-12 bg-white/30" />
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col md:flex-row gap-6 justify-center mt-16 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <NavLink
              to="/auth"
              className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Đăng nhập
            </NavLink>
            <NavLink
              to="/auth"
              className="px-8 py-3 bg-white/20 text-white font-semibold rounded-lg border border-white/40 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm hover:border-white/60 transform hover:scale-105"
            >
              Tạo tài khoản
            </NavLink>
          </div>
        </div>

        {/* Floating Accent Circles */}
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl -z-10 animate-float-bounce" />
        <div
          className="absolute -bottom-32 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10 animate-float-bounce"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </>
  );
}

export default HomePage;

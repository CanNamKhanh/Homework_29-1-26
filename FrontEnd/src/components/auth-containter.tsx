"use client";

import { useState } from "react";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";
import { PawPrint } from "./paw-print";
import { AnimatedBackground } from "./animated-background";

export function AuthContainer() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center py-8 px-4 z-50">
        {/* Decorative Paw Prints Background */}
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

        {/* Form Container */}
        <div className="w-full max-w-md relative z-10">
          {isLogin ? (
            <LoginForm key="login" onToggleForm={toggleForm} />
          ) : (
            <RegisterForm key="register" onToggleForm={toggleForm} />
          )}
        </div>
      </div>
    </>
  );
}

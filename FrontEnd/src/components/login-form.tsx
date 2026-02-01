"use client";

import React from "react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DogLogo } from "./dog-logo";
import { toast } from "sonner";
import { handleLogin } from "@/services/authService";
import { zodResolver } from "@hookform/resolvers/zod";

interface LoginFormProps {
  onToggleForm?: () => void;
}

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Email không được để trống" })
    .email({ message: "Email không đúng định dạng" }),
  password: z
    .string()
    .min(6, { message: "Mật khẩu phải chứa tôi thiểu 6 ký tự" }),
});

type FomrData = z.infer<typeof schema>;

export function LoginForm({ onToggleForm }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FomrData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    const res = await handleLogin(data.email, data.password);
    // console.log(res);
    setIsLoading(true);

    if (res) {
      toast.success(res.message);
      localStorage.setItem("email", res.data.email);
      setTimeout(() => {
        setIsLoading(false);

        window.location.href = "/";
      }, 2000);
    }
  };

  return (
    <div className="animate-fade-in-up w-full max-w-md">
      <DogLogo />

      <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary/10">
        <h1 className="text-3xl font-bold text-center text-primary mb-1 font-sans">
          Chào Mừng Quay Lại
        </h1>
        <p className="text-center text-muted-foreground mb-8 text-sm">
          Đăng nhập vào tài khoản của bạn
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-primary cursor-[url(public/paw-print.png),pointer]"
            >
              Email
            </label>
            <Input
              {...register("email")}
              id="email"
              type="email"
              placeholder="cunthuong@example.com"
              required
              className="border-2 border-primary/20 focus:border-primary/50 transition-colors"
            />
            {errors?.email?.message && (
              <span className="text-red-500 text-[12px]">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-primary cursor-[url(public/paw-print.png),pointer]"
            >
              Mật khẩu
            </label>
            <Input
              {...register("password")}
              id="password"
              type="password"
              placeholder="••••••••"
              required
              className="border-2 border-primary/20 focus:border-primary/50 transition-colors"
            />
            {errors?.password?.message && (
              <span className="text-red-500 text-[12px]">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 cursor-[url(public/paw-print.png),pointer]">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-2 border-primary/20"
              />
              <span className="text-muted-foreground">Nhớ tôi</span>
            </label>
            <a
              href="#"
              className="text-primary hover:text-primary/80 font-medium transition-colors cursor-[url(public/paw-print.png),pointer]"
            >
              Quên mật khẩu?
            </a>
          </div>

          <Button
            type="submit"
            disabled={!isValid}
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 rounded-lg transition-all hover:shadow-lg active:scale-95 cursor-[url(public/paw-print.png),pointer]"
          >
            {isLoading ? (
              <span className="flex items-center gap-2 cursor-[url(public/paw-print.png),pointer]">
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Đang đăng nhập...
              </span>
            ) : (
              <div className="cursor-[url(public/paw-print.png),pointer]">
                🐕 Đăng Nhập
              </div>
            )}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-muted-foreground text-sm">
            Chưa có tài khoản?{" "}
            <button
              onClick={onToggleForm}
              className="text-primary hover:text-primary/80 font-semibold transition-colors cursor-pointer"
            >
              Đăng ký ngay
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

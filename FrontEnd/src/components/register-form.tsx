"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DogLogo } from "./dog-logo";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleRegister } from "@/services/authService";
import { toast } from "sonner";

interface RegisterFormProps {
  onToggleForm?: () => void;
}

const schema = z
  .object({
    fullName: z.string().min(1, { message: "Tên không được để trống" }),
    email: z
      .string()
      .min(1, { message: "Email không được để trống" })
      .email({ message: "Email không đúng định dạng" }),
    password: z
      .string()
      .min(6, { message: "Mật khẩu phải chứa tôi thiểu 6 ký tự" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Mật khẩu nhập lại phải chứa tối thiếu 6 ký tự" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu nhập lại không khớp",
    path: ["confirmPassword"],
  });

type FomrData = z.infer<typeof schema>;

export function RegisterForm({ onToggleForm }: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FomrData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: {
    fullName: string;
    email: string;
    password: string;
  }) => {
    const res = await handleRegister(data.fullName, data.email, data.password);
    // console.log(res);

    if (res) {
      toast.success(res.message);
      setTimeout(() => {
        onToggleForm?.();
      }, 2000);
    }
  };

  return (
    <div className="animate-fade-in-up w-full max-w-md">
      <DogLogo />

      <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary/10">
        <h1 className="text-3xl font-bold text-center text-primary mb-1 font-sans">
          Gia Nhập Đội Cún
        </h1>
        <p className="text-center text-muted-foreground mb-8 text-sm">
          Tạo tài khoản mới để bắt đầu hành trình
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-primary cursor-[url(public/paw-print.png),pointer]"
            >
              Tên của bạn
            </label>
            <Input
              {...register("fullName")}
              id="fullName"
              type="text"
              name="fullName"
              placeholder="Cún Yêu Quý"
              required
              className="border-2 border-primary/20 focus:border-primary/50 transition-colors"
            />
            {errors?.fullName?.message && (
              <span className="text-red-500 text-[12px]">
                {errors.fullName.message}
              </span>
            )}
          </div>

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
              name="email"
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
              name="password"
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

          <div className="space-y-2">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-primary cursor-[url(public/paw-print.png),pointer]"
            >
              Xác nhận mật khẩu
            </label>
            <Input
              {...register("confirmPassword")}
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              required
              className="border-2 border-primary/20 focus:border-primary/50 transition-colors"
            />
            {errors?.confirmPassword?.message && (
              <span className="text-red-500 text-[12px]">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 rounded border-2 border-primary/20 cursor-pointer"
              required
            />
            <label
              htmlFor="terms"
              className="text-xs text-muted-foreground cursor-pointer"
            >
              Tôi đồng ý với{" "}
              <a href="#" className="text-primary hover:underline">
                Điều khoản sử dụng
              </a>
            </label>
          </div>

          <Button
            type="submit"
            disabled={!isValid}
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 rounded-lg transition-all hover:shadow-lg active:scale-95 cursor-[url(public/paw-print.png),pointer]"
          >
            <div className="cursor-[url(public/paw-print.png),pointer]">
              🐾 Đăng Ký
            </div>
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-muted-foreground text-sm">
            Đã có tài khoản?{" "}
            <button className="text-primary hover:text-primary/80 font-semibold transition-colors cursor-pointer">
              Đăng nhập
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

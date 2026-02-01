import * as z from "zod";
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email không được để trống" })
    .pipe(z.email({ message: "Email không đúng định dạng" })),
  password: z
    .string()
    .min(6, { message: "Mật khẩu phải chứa ít nhất 6 ký tự" }),
});

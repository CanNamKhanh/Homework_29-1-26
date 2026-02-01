import * as z from "zod";
export const authSchema = z.object({
  fullName: z.string().min(1, { message: "Tên đầy đủ không được để trống" }),
  email: z
    .string()
    .min(1, { message: "Email không được để trống" })
    .pipe(z.email({ message: "Email không đúng định dạng" })),
  password: z
    .string()
    .min(6, { message: "Mật khẩu phải chứa ít nhất 6 ký tự" }),
});

import axiosInstance from "@/utils/axios";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const handleRegister = async (
  fullName: string,
  email: string,
  password: string,
) => {
  try {
    const res = await axiosInstance.post("users/register", {
      fullName: fullName,
      email: email,
      password: password,
    });
    const data = res.data;
    return data;
  } catch (err) {
    if (err instanceof AxiosError) {
      const message = err.response?.data?.message || "Đăng ký thất bại";

      toast.error(message);
      return null;
    }

    toast.error("Đã có lỗi xảy ra, vui lòng thử lại");
    return null;
  }
};

export const handleLogin = async (email: string, password: string) => {
  try {
    const res = await axiosInstance.post("users/login", {
      email: email,
      password: password,
    });
    const data = res.data;
    return data;
  } catch (err) {
    if (err instanceof AxiosError) {
      const message = err.response?.data?.message || "Đăng nhập thất bại";

      toast.error(message);
      return null;
    }

    toast.error("Đã có lỗi xảy ra, vui lòng thử lại");
    return null;
  }
};

export const handleGetUser = async (email: string) => {
  try {
    const res = await axiosInstance.get(`users/${email}`);
    const data = res.data;
    return data;
  } catch (err) {
    if (err instanceof AxiosError) {
      const message = err.response?.data?.message || "Lấy thông tin thất bại";

      toast.error(message);
      return null;
    }

    toast.error("Đã có lỗi xảy ra, vui lòng thử lại");
    return null;
  }
};

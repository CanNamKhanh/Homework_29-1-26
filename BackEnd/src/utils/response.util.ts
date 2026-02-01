import { User } from "../types/user.type";

const checkUserExisted = (newUser: User, users: User[]) => {
  return users.some(
    (user) =>
      user.email === newUser.email || user.fullName === newUser.fullName,
  );
};

export const usersList: User[] = [];

export const authResponse = {
  getAll() {
    return usersList;
  },

  getByEmail(email: string) {
    const user = usersList.find((user) => user.email === email);
    return user;
  },

  create(user: User) {
    if (checkUserExisted(user, usersList)) {
      throw new Error("User already exists");
    }
    usersList.push(user);
    return user;
  },

  login(loginData: Pick<User, "email" | "password">) {
    const user = usersList.find(
      (user) =>
        user.email === loginData.email && user.password === loginData.password,
    );

    if (!user) {
      throw new Error("Invalid credentials");
    }

    return user;
  },
};

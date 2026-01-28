import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";

export type User = {
  id: number;
  username: string;
  password: string;
};

const usersPath = path.join(process.cwd(), "data/users.json");

export function getUsers(): User[] {
  const data = fs.readFileSync(usersPath, "utf-8");
  return JSON.parse(data);
}

export function verifyUser(username: string, password: string): Omit<User, "password"> | null {
  const users = getUsers();
  const user = users.find(u => u.username === username);

  if (!user) return null;

  const isValid = bcrypt.compareSync(password, user.password);

  if (!isValid) return null;

  const { password: _, ...safeUser } = user;
  return safeUser;
}

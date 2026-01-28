import { NextResponse } from "next/server";

const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6yT0SN-mNP7iwJAsRdiyOpndlpJs7eQmNioy3Vjc6NQaMnH-tmYojaCzXGo4igZmZg0VvCLfEkSUe/pub?output=csv";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const res = await fetch(CSV_URL);
  const text = await res.text();

  const users = text
    .trim()
    .split("\n")
    .slice(1)
    .map(line => {
      const [u, p, r] = line.split(",");
      return {
        username: u.trim(),
        password: p.trim(),
        role: r.trim()
      };
    });

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return NextResponse.json({ error: "Login gagal" }, { status: 401 });
  }

  const response = NextResponse.json({ role: user.role });

  response.cookies.set("auth", user.role, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60
  });

  return response;
}

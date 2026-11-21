import { NextResponse } from "next/server";
import { getUser, signToken, toPublic } from "./lib/auth";
import { store } from "./lib/db";

// POST /api/auth/register
export async function register(req: Request) {
  const { firstName, lastName, email, password, confirmPassword } = await req
    .json()
    .catch(() => ({}));

  const errors: Record<string, string> = {};
  if (!firstName) errors.firstName = "First name is required";
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) errors.email = "Valid email is required";
  if (!password || password.length < 6) errors.password = "Password must be at least 6 characters";
  if (confirmPassword !== undefined && confirmPassword !== password)
    errors.confirmPassword = "Passwords do not match";
  if (Object.keys(errors).length)
    return NextResponse.json({ message: "Validation failed", errors }, { status: 400 });

  if (store.users.some((u) => u.email.toLowerCase() === email.toLowerCase()))
    return NextResponse.json({ message: "Email already registered" }, { status: 409 });

  const user = { id: Date.now(), firstName, lastName: lastName ?? "", email, password };
  store.users.push(user); // in memory only (not durable)
  const pub = toPublic(user);
  return NextResponse.json({ accessToken: signToken(pub), user: pub }, { status: 201 });
}

// POST /api/auth/login
export async function login(req: Request) {
  const { email, password } = await req.json().catch(() => ({}));
  const user = store.users.find(
    (u) => u.email.toLowerCase() === String(email ?? "").toLowerCase() && u.password === password
  );
  if (!user)
    return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
  const pub = toPublic(user);
  return NextResponse.json({ accessToken: signToken(pub), user: pub });
}

// GET /api/auth/me  (Authorization: Bearer <token>)
export async function me(req: Request) {
  const user = getUser(req);
  if (!user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  return NextResponse.json(user);
}

// POST /api/auth/logout  (tokens are stateless: the client just deletes its token)
export async function logout() {
  return NextResponse.json({ message: "Logged out" });
}

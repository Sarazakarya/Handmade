import { createHmac, timingSafeEqual } from "node:crypto";
import type { User } from "./db";

export type PublicUser = Omit<User, "password">;

const TTL_SECONDS = 60 * 60 * 24 * 7; // 7 days

function secret() {
  const s = process.env.AUTH_SECRET;
  if (!s && process.env.NODE_ENV === "production")
    console.warn("[auth] AUTH_SECRET is not set: using an insecure default!");
  return s || "dev-only-secret-change-me";
}

const b64 = (s: string) => Buffer.from(s).toString("base64url");
const sign = (body: string) => createHmac("sha256", secret()).update(body).digest("base64url");

export function toPublic(u: User): PublicUser {
  return { id: u.id, firstName: u.firstName, lastName: u.lastName, email: u.email };
}

export function signToken(user: PublicUser): string {
  const body = b64(JSON.stringify({ user, exp: Math.floor(Date.now() / 1000) + TTL_SECONDS }));
  return `${body}.${sign(body)}`;
}

export function verifyToken(token: string): PublicUser | null {
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;
  const expected = sign(body);
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  try {
    const { user, exp } = JSON.parse(Buffer.from(body, "base64url").toString());
    if (!exp || exp < Math.floor(Date.now() / 1000)) return null;
    return user as PublicUser;
  } catch {
    return null;
  }
}

/** Reads "Authorization: Bearer <token>" and returns the user, or null. */
export function getUser(req: Request): PublicUser | null {
  const h = req.headers.get("authorization") ?? "";
  const m = /^Bearer\s+(.+)$/i.exec(h);
  return m ? verifyToken(m[1]) : null;
}

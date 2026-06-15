// @/actions/setToken.ts
"use server";

import { cookies } from "next/headers";

const STATIC_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQwLCJlbWFpbCI6InNiZXNsYW1pQGdtYWlsLmNvbSIsInJvbGUiOiJidXllciIsInByb2ZpbGVQaWN0dXJlIjpudWxsLCJpYXQiOjE3ODE0MzYwNjMsImV4cCI6MTc4MTQzOTY2M30.dOR8m5XYODPTXSHkWfVLp_1cpSB6MCq18v78vf_om7Q";
export async function setStaticToken() {
  const cookieStore = await cookies();

  cookieStore.set("token", STATIC_TOKEN, {
    httpOnly: false, // must be false so client JS can read it
    secure: false,
    sameSite: "lax",
    maxAge: 60 * 60 * 24,
    path: "/",
  });

  return { success: true };
}

"use server";

import { cookies } from "next/headers";

export async function setStaticToken() {
  const cookieStore = await cookies();
  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDM5LCJlbWFpbCI6InNiZXNsYW1pQGdtYWlsLmNvbSIsInJvbGUiOiJidXllciIsInByb2ZpbGVQaWN0dXJlIjpudWxsLCJpYXQiOjE3ODE0MjY5NDMsImV4cCI6MTc4MTQzMDU0M30.ch7SuyhyiRnePPmr386UEFUxDYleOzCLgVEm5kPBeQo",
  );

  cookieStore.set(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDM5LCJlbWFpbCI6InNiZXNsYW1pQGdtYWlsLmNvbSIsInJvbGUiOiJidXllciIsInByb2ZpbGVQaWN0dXJlIjpudWxsLCJpYXQiOjE3ODE0MjY5NDMsImV4cCI6MTc4MTQzMDU0M30.ch7SuyhyiRnePPmr386UEFUxDYleOzCLgVEm5kPBeQo",
    {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    },
  );

  return { success: true };
}

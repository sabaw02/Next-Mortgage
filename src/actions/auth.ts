"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function registerStep1(formData: FormData): Promise<void> {
  const email = formData.get("email") as string;

  if (!email || !email.includes("@")) {
    throw new Error("ایمیل معتبر وارد کنید");
  }

  const res = await fetch(`${NEXT_PUBLIC_API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const data = await res.json();
  console.log("data.verificationCode: ", data.verificationCode);

  if (!res.ok) {
    throw new Error(data.message || "خطا در ارسال کد تایید");
  }

  const cookieStore = await cookies();
  cookieStore.set("tempUserId", data.tempUserId.toString(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 10,
    path: "/",
  });

  if (process.env.NODE_ENV === "development") {
    cookieStore.set("verificationCode", data.verificationCode, {
      httpOnly: true,
      secure: false,
      maxAge: 60 * 10,
      path: "/",
    });
  }

  redirect("/signup/step2");
}

export async function verifyStep2(
  formData: FormData,
): Promise<{ error?: string }> {
  const code = formData.get("code") as string;
  const cookieStore = await cookies();
  const tempUserId = cookieStore.get("tempUserId")?.value;

  console.log("verifyStep2 called, code:", code, "tempUserId:", tempUserId);

  if (!tempUserId) {
    return { error: "نشست منقضی شده، لطفاً دوباره ایمیل خود را وارد کنید" };
  }

  let userId: number | null = null;

  if (process.env.NODE_ENV === "development") {
    const storedCode = cookieStore.get("verificationCode")?.value;
    if (storedCode && storedCode !== code) {
      return { error: "کد تأیید نامعتبر است" };
    }
    userId = parseInt(tempUserId);
    cookieStore.delete("verificationCode");
  } else {
    const res = await fetch(`${NEXT_PUBLIC_API_URL}/auth/verify-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tempUserId: parseInt(tempUserId),
        code,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      return { error: data.message || "کد تأیید نامعتبر است" };
    }

    userId = data.userId;
    console.log("userId obtained:", userId);
  }

  console.log("userId in step2:", userId);
  if (!userId) {
    return { error: "خطا در دریافت شناسه کاربر" };
  }

  cookieStore.delete("tempUserId");
  cookieStore.set("userId", userId.toString(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60,
    path: "/",
  });

  // let token: string;
  // if (process.env.NODE_ENV === 'development') {
  //   token = `dev-token-${Date.now()}`;
  // } else {
  //   token = data.token;
  // }

  // cookieStore.set('auth-token', token, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV === 'production',
  //   maxAge: 60 * 60 * 24 * 7,
  //   path: '/',
  // });
  console.log("Redirecting to /signup/step3");

  redirect("/signup/step3");
}

export async function completeRegistration(
  prevState: { error?: string },
  formData: FormData,
): Promise<{ error?: string }> {
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  const phoneNumber = formData.get("phoneNumber") as string;

  if (!password || password.length < 6) {
    return { error: "رمز عبور حداقل ۶ کاراکتر" };
  }
  if (password !== confirmPassword) {
    return { error: "رمز عبور و تکرار آن مطابقت ندارند" };
  }

  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;
  console.log("userId:", userId);

  if (!userId) {
    return { error: "نشست منقضی شده، دوباره از ابتدا تلاش کنید" };
  }

  const payload = {
    userId: parseInt(userId),
    password,
    phoneNumber: phoneNumber || null,
  };

  console.log("parseInt:", parseInt(userId));

  if (process.env.NODE_ENV === "development") {
    cookieStore.delete("userId");
    const fakeToken = `dev-token-${Date.now()}`;
    cookieStore.set("auth-token", fakeToken, {
      httpOnly: true,
      secure: false,
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    redirect("/");
  }

  const res = await fetch(`${NEXT_PUBLIC_API_URL}/auth/complete-registration`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  console.log("data:", data);
  if (!res.ok) {
    return { error: data.message || "خطا در تکمیل ثبت‌ نامه" };
  }

  // if (data.token) {
  //   cookieStore.set('auth-token', data.token, {
  //     httpOnly: true,
  //     secure: process.env.NODE_ENV === 'production',
  //     maxAge: 60 * 60 * 24 * 7,
  //     path: '/',
  //   });
  // }

  cookieStore.delete("userId");
  redirect("/");
}

export async function login(
  prevState: { error?: string },
  formData: FormData,
): Promise<{ error?: string }> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !email.includes("@")) {
    return { error: "ایمیل معتبر وارد کنید" };
  }
  if (!password || password.length < 6) {
    return { error: "رمز عبور حداقل ۶ کاراکتر" };
  }

  const res = await fetch(`${NEXT_PUBLIC_API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    return { error: data.message || "ایمیل یا رمز عبور اشتباه است" };
  }

  const cookieStore = await cookies();
  cookieStore.set("accessToken", data.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60,
    path: "/",
  });
  cookieStore.set("refreshToken", data.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  if (process.env.NODE_ENV === "development") {
    cookieStore.set("auth-dev", "true", {
      httpOnly: false,
      secure: false,
      maxAge: 60 * 60,
      path: "/",
    });
  }

  redirect("/");
}

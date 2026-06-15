// lib/tokenManager.ts
"use client";

const TOKEN_KEY = "auth_token";

export const localstorage = {
  setToken: (token: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(TOKEN_KEY, token);
    }
  },

  getToken: () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(TOKEN_KEY);
    }
    return null;
  },

  removeToken: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(TOKEN_KEY);
    }
  },

  hasToken: () => {
    if (typeof window !== "undefined") {
      return !!localStorage.getItem(TOKEN_KEY);
    }
    return false;
  },
};

import {cookies} from "next/headers";
import {jwtDecode} from "jwt-decode";
import { AuthUser } from "@/types";
 
export async function getServerUser(): Promise<AuthUser | null> {
  const token = (await cookies()).get("token")?.value;
  if (!token) return null;

  try {
    return jwtDecode<AuthUser>(token);
  } catch {
    return null;
  }
}
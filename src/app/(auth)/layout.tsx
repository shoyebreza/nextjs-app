import { AuthFrame } from "@/components/layout/AuthFrame";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <AuthFrame>{children}</AuthFrame>;
}
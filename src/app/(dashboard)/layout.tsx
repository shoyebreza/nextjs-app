import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { Sidebar } from "@/components/layout/Sidebar";

export default async function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login?callbackUrl=/dashboard");
  }

  return <div className="flex min-h-screen bg-paper"><Sidebar /><div className="flex min-w-0 flex-1 flex-col"><DashboardHeader /><main className="flex-1">{children}</main><footer className="border-t border-line px-6 py-4 text-xs text-muted lg:px-10">Lumen workspace · All systems operational</footer></div></div>;
}
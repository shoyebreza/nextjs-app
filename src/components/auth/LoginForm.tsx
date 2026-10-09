"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function LoginForm() {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function handleSubmit(formData: FormData) {
    setError("");
    setPending(true);

    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
      callbackUrl: "/dashboard",
    });

    if (!result?.ok) {
      setError("That email and password combination is not recognized.");
      setPending(false);
      return;
    }

    window.location.assign(result.url ?? "/dashboard");
  }

  return (
    <form action={handleSubmit} className="mt-9 space-y-4">
      <label className="field-label">Email<input name="email" className="input mt-2" type="email" placeholder="you@company.com" required /></label>
      <label className="field-label">Password<input name="password" className="input mt-2" type="password" placeholder="••••••••" required /></label>
      <div className="flex justify-end"><a href="#forgot" className="text-xs font-semibold text-teal">Forgot password?</a></div>
      {error && <p role="alert" className="text-sm text-coral">{error}</p>}
      <Button type="submit" className="w-full">{pending ? "Signing in..." : "Sign in"}</Button>
    </form>
  );
}

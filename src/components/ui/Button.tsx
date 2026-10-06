import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
  className?: string;
};

const variants = {
  primary: "bg-ink text-white shadow-[0_10px_24px_rgba(20,38,41,0.16)] hover:bg-teal",
  secondary: "border border-line bg-white text-ink hover:border-teal hover:text-teal",
  ghost: "text-ink hover:bg-sage",
};

export function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  className = "",
}: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition ${variants[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button type={type} className={classes}>{children}</button>;
}
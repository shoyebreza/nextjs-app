import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      name: "Password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;

        if (
          typeof email !== "string" ||
          typeof password !== "string" ||
          !process.env.AUTH_EMAIL ||
          !process.env.AUTH_PASSWORD ||
          email.trim().toLowerCase() !== process.env.AUTH_EMAIL.trim().toLowerCase() ||
          password !== process.env.AUTH_PASSWORD
        ) {
          return null;
        }

        return {
          id: process.env.AUTH_EMAIL,
          name: "Sam Kim",
          email: process.env.AUTH_EMAIL,
        };
      },
    }),
  ],
});

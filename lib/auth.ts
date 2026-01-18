import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const loginCredentials = {
  email: "test@test.com",
  password: "test",
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        const isCredentialsValid =
          credentials?.email === loginCredentials.email &&
          credentials.password === loginCredentials.password;

        if (!isCredentialsValid) {
          throw new Error("Invalid credentials");
        }

        return {
          id: "1",
          ...loginCredentials,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

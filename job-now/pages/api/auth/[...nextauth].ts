import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import LinkedInProvider from "next-auth/providers/linkedin";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: `${process.env.GITHUB_ID}`,
      clientSecret: `${process.env.GITHUB_SECRET}`,
      authorization: { params: { scope: "user" } },
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET,
};

export default NextAuth(authOptions);

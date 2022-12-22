import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import SalesforceProvider from "next-auth/providers/salesforce";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "a3f17b90c24fc185ff54",
      clientSecret: "55a547567a1ddbdbaf75b5111f560227f0ff0fbf",
    }),

    SalesforceProvider({
      idToken: true,
      clientId:
        "3MVG9n_HvETGhr3BKulWiUvX7rqibNeBrvW4G3xMTHNBPhlv7JZigS8xBalnfZWUudTduJLhAOgstyDc3lwSP",
      clientSecret:
        "1A878B55EFBA93614AF0F9BEA4C7FAF6D349AAF83E36C00D8AD5079CDA4113CC",
        authorization:  "https://test.salesforce.com/services/oauth2/authorize",
        token: "https://test.salesforce.com/services/oauth2/token",
    }),
  ],

  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

export default NextAuth(authOptions);


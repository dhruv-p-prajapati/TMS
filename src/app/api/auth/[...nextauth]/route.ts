import { mongoInit } from "@/lib/dbConfig";
import Space from "@/models/space.model";
import User from "@/models/user.model";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }: { user: any; account: any }) {
      if (account.provider == "google") {
        
        await mongoInit();

        const existedUser = await User.findOne({ email: user.email });
        if (!existedUser) {
          const newUser = new User({
            email: user.email,
            name: user.name,
            imgUrl: user.image,
          });
          await newUser.save();
        }
      }

      return true;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

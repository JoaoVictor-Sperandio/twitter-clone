import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  pages: {
    signIn: "/auth/signin",
  },

  secret: process.env.SECRET,

  callbacks:{
    async session({ session, token, user }){
                                          // For some reason it doesn't work, 
                                          //so we need to do this manually 
                                          //for every place that we need to use the username...
      session.user.username = session.name//.split(" ").join("").toLocaleLowerCase();
      session.user.uid = token.sub;
      return session;
    },
  },

});
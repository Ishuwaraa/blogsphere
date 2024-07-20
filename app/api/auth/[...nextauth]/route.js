import connectToDb from "@/app/lib/dbConnect";
import { User } from "@/app/lib/models";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            await connectToDb()
            // console.log(user)
            // console.log(account)
            // console.log(profile)

            try{
                const exist = await User.findOne({ email: profile.email })  //cannot use user before authentication

                if(!exist) {
                    const newUser = await User.create({
                        name: profile.name,
                        email: profile.email,
                        imageUrl: profile.picture,
                        blogs: []
                    })

                    user.id = newUser._id.toString()
                } else {
                    user.id = exist._id.toString()
                }

                return true     //authenticating user if no errors occurred
            } catch (err) {
                console.log(err.message)
                return false    //user won't be authenticated
            }
        },
        async jwt({ token, user }) {
            // console.log(token)
            // console.log(user)

            if(user) 
                token.userId = user.id  //adding a new userId key to the token object

            return token
        },
        async session({ session, token, user }) {
            // console.log(session)
            // console.log(token)
            // console.log(user)    
            
            session.user.id = token.userId

            // console.log('new', session)

            return session
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
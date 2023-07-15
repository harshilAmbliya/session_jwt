import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from "@/app/libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextResponse } from "next/server";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt'
    },

    secret: process.env.NEXT_SECRET,
    pages: {
        signIn: '/signin',
        login: '/login',
    },
    providers: [
        CredentialsProvider({
            name: "login",
            async authorize(credentials, req) {
                const { email } = credentials;

                if (!credentials?.email || !credentials.password) {
                    return NextResponse.json({ message: "Invalid User Or Password" }, { status: 404 })
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: email
                    }
                })

                console.log(user)
                if (!user) {
                    throw new Error("Invalid Email Or Password !")
                }
                return user;
            }
        })
    ],
    // callbacks:{
    //     async session({ token }) {
    //         // Persist the OAuth access_token and or the user id to the token right after signin
    //         this.session.accessToken = token.accessToken
    //         this.session.user.id  = token.id
    //         return session
    //       }
    // }

}
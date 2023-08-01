import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from "@/app/libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextResponse } from "next/server";
// import { useRouter } from 'next/router';
// import  Jwt  from 'jsonwebtoken';
// import { Jwt } from 'jsonwebtoken';

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt'
    },

    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signUp: '/registration',
        signIn: '/login',
    },
    providers: [
        CredentialsProvider({
            name: "login",
            async authorize(credentials, req) {
                const { email, password } = credentials;

                if (!email || !password) {
                    return NextResponse.json({ message: "Invalid User Or Password" }, { status: 404 })
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email
                    }
                })

                console.log(user)
                if (!user) {
                    throw new Error("Invalid Email Or Password !")
                }

                if (password !== user.password) {
                    console.log("password check successfully..")
                    return NextResponse.json({
                        message: "Invalid password witten.."
                    }, { status: 500 }, { success: false }, { ok: false })
                }

                return user;
            }
        })
    ],






    // jwt: {

    //     async encode({ secret, token }) {
    //         return jwt.sign(token, secret)
    //     },
    //     async decode({ secret, token }) {
    //         return jwt.verify(token, secret)
    //     },

    // }
    // callbacks:{
    //     async session({ token }) {
    //         // Persist the OAuth access_token and or the user id to the token right after signin
    //         this.session.accessToken = token.accessToken
    //         this.session.user.id  = token.id
    //         return session
    //       }
    // }

}


import { NextResponse } from "next/server";
import { PrismaClient } from "prisma/prisma-client"
const prisma = new PrismaClient()
export const POST = async (req) => {
    try {
        const user = await req.json();
        const { name, email, password, address } = user;
        // console.log(user)
        const Create = await prisma.user.create({
            data: {
                name,
                email,
                password,
                address
            }
        })

        return NextResponse.json({ Create }, { status: 200 })
    } catch (error) {
        NextResponse.json({ message: "create error .. ", error }, { status: 500 })
    }
}



export const GET = async () => {

    const allUser = await prisma.user.findMany();
    console.log(allUser)
    return NextResponse.json(allUser, { status: 200 })
}
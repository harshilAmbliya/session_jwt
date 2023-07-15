import { NextResponse } from "next/server";
import { PrismaClient } from "prisma/prisma-client"
const prisma = new PrismaClient()
export const POST = async (req) => {
    try {
        const user = await req.json();
        const { name, email, password, address } = user;
        // console.log(user)
        const usersdata = await prisma.user.create({
            data: {
                name,
                email,
                password,
                address
            }
        })

        return NextResponse.json({ usersdata }, { status: 200 })
    } catch (error) {
        NextResponse.json({ message: "create error .. ", error }, { status: 500 })
    }
}



export const GET = async () => {

    const allUser = await Prisma.user.findMany();
    return NextResponse.json(allUser, { status: 200 })
}
import connectToDb from "@/app/lib/dbConnect";
import { Blog, User } from "@/app/lib/models";
import { NextResponse } from "next/server";

export const GET = async () => {
    try{
        await connectToDb()

        const data = await Blog.find({ user: '669a90a5d7e8ab39addbee05'}).sort({ createdAt: -1 })

        return NextResponse.json(data, { status: 200 })
    } catch (err) {
        console.log(err.message)
        return NextResponse.json({ msg: err.message }, { status: 400 })
    }
}
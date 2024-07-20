import connectToDb from "@/app/lib/dbConnect";
import { Blog, User } from "@/app/lib/models";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const { id } = params

    try{
        await connectToDb()

        const blog = await Blog.find({ user: id }).sort({ createdAt: -1 })
        const user = await User.findById(id)

        return NextResponse.json({ blog, user }, { status: 200 })
    } catch (err) {
        console.log(err.message)
        return NextResponse.json({ msg: err.message }, { status: 400 })
    }
}
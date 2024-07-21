import connectToDb from "@/app/lib/dbConnect";
import { User } from "@/app/lib/models";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const { id } = params

    try{
        await connectToDb()

        const blogIds = await User.findById(id)

        return NextResponse.json({ blogs: blogIds.blogs }, { status: 200 })
    } catch (err) {
        console.log(err)
        return NextResponse.json({ msg: err.message }, { status: 400 })
    }
}
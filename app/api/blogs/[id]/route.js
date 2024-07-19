import connectToDb from "@/app/lib/dbConnect";
import { Blog, User } from "@/app/lib/models";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const { id } = params

    try{
        await connectToDb()
        
        const blog = await Blog.findById(id)
        if(!blog) return NextResponse.json({ msg: 'Invalid ID. No such blog was found' }, { status: 404 })

        const user = await User.findById(blog.user)        

        return NextResponse.json({ blog: blog, name: user.name}, { status: 200 })
    } catch (err) {
        console.log(err.message)
        return NextResponse.json({ msg: err.message }, { status: 400 })
    }
}
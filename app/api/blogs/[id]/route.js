import connectToDb from "@/app/lib/dbConnect";
import { Blog, User } from "@/app/lib/models";
import { revalidatePath } from "next/cache";
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

export const PATCH = async (req, { params }) => {
    const { id } = params
    const body = await req.json()

    try{
        await connectToDb()

        const blog = await Blog.findByIdAndUpdate(id, {
            title: body.title,
            description: body.description,
            imageUrl: body.imageUrl,
        })

        return NextResponse.json(blog, { status: 200 })
    } catch (err) {
        console.log(err.message)
        return NextResponse.json({ msg: err.message }, { status: 400 })
    }
}

export const DELETE = async (req, { params } ) => {
    const { id } = params

    try{
        await connectToDb()

        await Blog.findByIdAndDelete(id)
        revalidatePath('/profile')  //fetch data again after deletion

        return NextResponse.json({ msg: 'Blog deleted successfully' }, { status: 200 })
    } catch (err) {
        console.log(err.message)
        return NextResponse.json({ msg: err.message }, { status: 400 })
    }
}
import connectToDb from '@/app/lib/dbConnect';
import { Blog, User } from '@/app/lib/models';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
    try{
        await connectToDb()

        const blogs = await Blog.find().sort({ createdAt: -1 })            

        return NextResponse.json(blogs, { status: 200 })
    } catch (err) {
        console.log(err.message)
        return NextResponse.json({ msg: err.message }, { status: 400 })
    }
}

export const POST = async (req) => {
    const body = await req.json()

    try{
        await connectToDb()

        const blog = await Blog.create({
            title: body.title,
            description: body.description,
            imageUrl: body.imageUrl,
            user: body.user
        })

        await User.findByIdAndUpdate(body.user, {
            $push: {
                blogs: blog._id
            }
        })
        revalidatePath('/')
        revalidatePath('/profile')

        return NextResponse.json(blog, { status: 201 })
    } catch (err) {        
        console.log(err.message)
        return NextResponse.json({ msg: err.message }, { status: 400 })
    }
}
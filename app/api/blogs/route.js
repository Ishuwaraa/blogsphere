import connectToDb from '@/app/lib/dbConnect';
import { Blog, User } from '@/app/lib/models';
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

        const blog = Blog.create({
            title: body.title,
            description: body.description,
            imageUrl: body.imageUrl,
            user: body.user
        })

        return NextResponse.json(blog, { status: 201 })
    } catch (err) {        
        console.log(err.message)
        return NextResponse.json({ msg: err.message }, { status: 400 })
    }
}
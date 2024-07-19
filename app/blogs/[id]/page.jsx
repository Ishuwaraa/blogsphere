import Image from "next/image";

// const fetchData = async (id) => {
//     try{
//         const res = await fetch(`http://localhost:3000/api/blogs/${id}`, { next: { revalidate: 3600 }})

//         if(!res.ok) {
//             const error = await res.json()
//             throw new Error(error.msg || 'An error occured')
//         }

//         const blog = await res.json()
//         return blog
//     } catch (err) {
//         // return err.response.data.msg
//         console.log(err.message)
//     }
// }

const SingleBlog = async ({ params }) => {
    const { id } = params
    
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`, { next: { revalidate: 3600 }})
    const data = await res.json()

    const date = new Date(data.blog.createdAt).toDateString()

    return ( 
        <div className="page">
            <div className="flex justify-center">
                <div className="flex flex-col md:w-2/3">
                    <div className="relative w-full h-72">
                        <Image src={data.blog.imageUrl} alt='title' fill className=" absolute object-cover rounded-lg" />
                    </div>

                    <div className=" grid grid-cols-2 md:grid-cols-3 justify-between mt-10">
                        <p className=" md:col-span-2 text-lg font-bold">{data.blog.title}</p>

                        <div>
                            <p className="flex justify-end">written by : {data.name}</p>
                            <p className="flex justify-end text-sm mt-1">{date}</p>
                        </div>
                    </div>                    

                    <p className="mt-10">{data.blog.description}</p>
                </div>
            </div>
        </div>
     );
}
 
export default SingleBlog;
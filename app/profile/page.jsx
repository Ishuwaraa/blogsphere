import Link from "next/link";
import BlogCard from "../components/BlogCard";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";

const Profile = async () => {
    const session = await getServerSession(authOptions)

    const res = await fetch(`http://localhost:3000/api/users/${session.user.id}`, { cache: 'no-store' })
    const data = await res.json()

    return ( 
        <div className="page">
            {/* <ProfileData /> */}
            <div className=" flex justify-center items-center gap-5 md:gap-10 mb-10">            
                <div className="relative w-24 h-24 md:w-36 md:h-36 ">
                    <Image src={data.user.imageUrl} alt='title' fill className=" absolute object-cover rounded-full" />
                </div>

                <div>
                    <p>{data.user.name}</p>
                    <p>{data.user.email}</p>
                </div>
            </div>

            <p className="text-2xl md:text-4xl text-primary font-bold mb-10">My Blogs</p>

            <div className="flex justify-center">
                {data.blog.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {data.blog.map((blog, index) => (
                            <Link key={index} href={`/profile/blogEdit/${blog._id}`}>
                                <BlogCard 
                                    image={blog.imageUrl} 
                                    title={blog.title}
                                    description={blog.description}
                                /> 
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div>
                        <p>Woops! you haven't posted anything yet...</p>
                    </div>
                )}
                </div>
        </div>
     );
}
 
export default Profile;
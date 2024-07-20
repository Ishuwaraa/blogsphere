import Link from "next/link";
import BlogCard from "../components/BlogCard";

const Profile = async () => {

    const res = await fetch('http://localhost:3000/api/users', { cache: 'no-store' })
    const blogs = await res.json()

    return ( 
        <div className="page">
            <p className="text-2xl md:text-4xl text-primary font-bold mb-10">My Blogs</p>

            <div className="flex justify-center">
                {blogs.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogs.map((blog, index) => (
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
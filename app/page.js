import BlogCard from "./components/BlogCard";
import Link from "next/link";

export default async function Home() {  

  const res = await fetch('http://localhost:3000/api/blogs', { cache: 'no-store' })
  const blogs = await res.json()

  return (
    <div className="page">
      <p className="text-2xl md:text-4xl text-primary font-bold mb-10">All Blogs</p>
      <div className="flex justify-center">
          {blogs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogs.map((blog, index) => (
                <Link href={`/blogs/${blog._id}`} key={index}>
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
              <p className=" text-lg">Woops! such empty...</p>
            </div>
          )}
      </div>
    </div>
  );
}

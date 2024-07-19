import Image from "next/image";
import BlogCard from "./components/BlogCard";
import carImg from '../public/assets/koolcat.jpg';
import Link from "next/link";

export default function Home() {
  return (
    <div className="page">
      <p className="text-2xl md:text-4xl text-primary font-bold mb-10">All Blogs</p>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Array(4).fill(0).map((_, index) => (
            <Link href={`/blogs/${index}`} key={index}>
              <BlogCard 
                image={carImg}
                title='Blog title' 
                author='ishuwara'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, delectus.'  
              /> 
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

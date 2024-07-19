import Link from "next/link";
import BlogCard from "../components/BlogCard";
import carImg from "../../public/assets/koolcat.jpg";

const Profile = () => {
    return ( 
        <div className="page">
            <p className="text-2xl md:text-4xl text-primary font-bold mb-10">My Blogs</p>

            <div className="flex justify-center">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {Array(3).fill(0).map((_, index) => (
                        <Link key={index} href={`/profile/blogEdit/${index}`}>
                            <BlogCard 
                                image={carImg} 
                                title='Blog title'
                                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, delectus.'  
                            /> 
                        </Link>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Profile;
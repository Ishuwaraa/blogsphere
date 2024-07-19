import Image from "next/image";

const BlogCard = ({ image, title, description, categories, author }) => {
    
    return (
        <div className=" card"> 
            <div className="relative w-full h-48 ">
                <Image src={image} alt={title} fill className=" absolute object-cover" />
            </div>
            <div className="m-4">
                <p className=" text-xl font-bold line-clamp-2 mb-2">{title}</p>                
                <p className="line-clamp-2 mt-3">{description}</p>                                
            </div>
        </div>   
    )
}

export default BlogCard;
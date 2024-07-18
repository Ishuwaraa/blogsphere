import Image from "next/image";

const BlogCard = ({ image, title, description, categories, author }) => {
    // console.log(typeof(categories), categories.length)
    // const array = Object.entries(categories)
    // console.log(Array.isArray(array), typeof(array))
    
    return (
        <div className=" card"> 
            <Image src={image} alt={title} className=" w-full h-48 object-cover" />
            <div className="m-4">
                <p className=" text-xl font-bold line-clamp-2 mb-2">{title}</p>

                <div className="flex">
                    {categories.slice(0, 3).map((category, index) => (
                        <p key={index} className=" bg-gray-400 py-1 px-2 text-white rounded-xl mr-1">{category}</p>
                    ))}
                </div>

                <p className="line-clamp-2 mt-3">{description}</p>
                
                <p className="flex justify-end text-sm line-clamp-2 mt-3">written by : {author}</p>
            </div>
            {/* <div className=" grid grid-cols-2 m-4">
                <div className=" text-lg font-bold">Rs. {price}/mo</div>
                <div className=" flex justify-end items-center">
                    <span className=" text-lg font-semibold mr-1">{rate}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>             */}
        </div>   
    )
}

export default BlogCard;
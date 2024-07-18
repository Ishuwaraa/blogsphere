import Image from "next/image";
import carImg from '../../../public/assets/koolcat.jpg'

const SingleBlog = ({ params }) => {
    const { id } = params

    return ( 
        <div className="page">
            <div className="flex justify-center">
                <div className="flex flex-col md:w-2/3">
                    <Image src={carImg} alt='title' className=" w-full h-72 object-cover rounded-lg" />

                    <div className=" grid grid-cols-3 justify-between mt-10">
                        <p className=" col-span-2 text-lg font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, cum</p>

                        <div>
                            <p className="flex justify-end">written by : ishuwara</p>
                            <p className="flex justify-end text-sm mt-1">20/07/2024</p>
                        </div>
                    </div>

                    <p className=" mt-5">
                        categories : 
                        {Array(3).fill(0).map((_, index) => (
                            <span key={index} className=" bg-gray-400 py-1 px-2 text-white rounded-xl mx-1">cat1</span>
                        ))}
                    </p>

                    <p className="mt-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, architecto repellat obcaecati sed
                        facilis tenetur commodi reiciendis a inventore eaque.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default SingleBlog;
import Image from "next/image";
import carImg from '../../../public/assets/koolcat.jpg'

const SingleBlog = ({ params }) => {
    const { id } = params

    return ( 
        <div className="page">
            <div className="flex justify-center">
                <div className="flex flex-col md:w-2/3">
                    <div className="relative w-full h-72">
                        <Image src={carImg} alt='title' fill className=" absolute object-cover rounded-lg" />
                    </div>

                    <div className=" grid grid-cols-3 justify-between mt-10">
                        <p className=" col-span-2 text-lg font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, cum</p>

                        <div>
                            <p className="flex justify-end">written by : ishuwara</p>
                            <p className="flex justify-end text-sm mt-1">20/07/2024</p>
                        </div>
                    </div>                    

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
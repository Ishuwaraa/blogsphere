"use client"

import Image from 'next/image';
import carImg from '../../../../public/assets/koolcat.jpg';
import { useState } from 'react';
import { CldUploadWidget } from 'next-cloudinary';

const EditBlog = ({ params }) => {
    const [imageUrl, setImageUrl] = useState(null)

    const { id } = params 

    return ( 
        <div className="page">
            <div className="flex justify-center">
                <div className="flex flex-col md:w-2/3">

                <CldUploadWidget          
                    uploadPreset="icaziuoy"
                    options={{
                        sources: ['local', 'camera'],
                        multiple: false,
                        maxFiles: 1
                    }}
                    onSuccess={(result, widget) => {
                        console.log(result) 

                        if(result.event !== 'success') return
                        
                        setImageUrl(result.info.secure_url)
                    }}>
                    {({ open }) => <button onClick={() => open()} className="bg-secondary p-2 rounded-lg">Add new image</button>}
                </CldUploadWidget>                    

                    <div className="flex gap-10 my-8">
                        <div>
                            <p>Current image: </p>
                            <div className="relative w-40 h-40 ml-5">
                                <Image src={carImg} alt='title' fill className=" absolute object-cover rounded-lg" />
                            </div>
                        </div>
                        {imageUrl && <div>
                            <p>New image: </p>
                            <div className="relative w-40 h-40 ml-5">
                                <Image src={imageUrl} alt='title' fill className=" absolute object-cover rounded-lg" />
                            </div>
                        </div>}

                    </div>

                    <form action="">
                        <input type="text" placeholder="title" className="input mb-8" readOnly value={id}/>                        
                        <input type="text" className="input mb-8" readOnly value={imageUrl ? imageUrl : 'image url'}/>                      
                        
                        <textarea name="" className="p-2 w-full border border-secondary rounded-lg" placeholder="turn your thoughts into words..." rows='10' style={{ resize: 'none'}}></textarea>

                        <div className=" flex justify-between mt-10 px-10">
                            <button className=" bg-red-600 text-white text-xl font-bold px-3 py-1 rounded-lg text-center">DELETE BLOG</button>
                            <button className="btn bg-primary">UPDATE BLOG</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default EditBlog;
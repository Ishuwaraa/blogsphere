"use client"

import { CldUploadWidget, CldImage, getCldImageUrl } from 'next-cloudinary'
import Image from 'next/image';
import { useState } from 'react';

const UploadImage = () => {
    const [publicId, setPublicId] = useState(null)
    

    const imageUrl = getCldImageUrl({
        width: 270,
        height: 180,
        src: publicId ? publicId : ''
    })

    return ( 
        <>
        <div className=' flex justify-center'>
            {publicId && <CldImage src={publicId} height={180} width={270} alt="image" className=" mb-5" />}
            {publicId && <Image src={imageUrl} alt='image' height={180} width={180} />}
        </div>

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

                setPublicId(result.info.public_id)
                console.log('public id: ', result.info.public_id)
            }}>
            {({ open }) => <button onClick={() => open()} className="bg-secondary p-2 rounded-lg">Add image</button>}
        </CldUploadWidget>
        </>
     );
}
 
export default UploadImage;
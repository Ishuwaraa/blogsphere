"use client"

import { CldUploadWidget, CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


const CreateBlog = () => {
    const router = useRouter()

    const [publicId, setPublicId] = useState(null)
    const [imageUrl, setImageUrl] = useState('')
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            title,
            description,
            imageUrl,
            user: '669a90a5d7e8ab39addbee05'
        }
        
        if(!publicId) {
            alert('Please add an image for your blog')
            return
        }

        try{
            await fetch('http://localhost:3000/api/blogs', {
                method: 'POST',
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify(data)
            })

            router.replace('/')
        } catch (err) {
            console.log(err)
        }
    }

    return ( 
        <div className="page">
            <div className="flex justify-center">
                <div className="flex flex-col md:w-2/3">
                    
                <div className=' flex justify-center'>
                    {publicId && <CldImage src={publicId} height={180} width={270} alt="image" className=" mb-5" />}
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
                        setImageUrl(result.info.secure_url)
                    }}>
                    {({ open }) => <button onClick={() => open()} className="bg-secondary p-2 rounded-lg">Add image</button>}
                </CldUploadWidget>

                    <form action="" onSubmit={(e) => handleSubmit(e)} className=" mt-10">
                        <input type="text" placeholder="title" className="input mb-8" required onChange={(e) => setTitle(e.target.value)}/>                        
                        <input type="text" readOnly hidden value={imageUrl} className="input mb-8"/>                        
                        
                        <textarea onChange={(e) => setDescription(e.target.value)} required className="p-2 w-full border border-secondary rounded-lg" placeholder="turn your thoughts into words..." rows='10' style={{ resize: 'none'}}></textarea>

                        <div className=" flex justify-between mt-10 md:px-10">
                            <Link href='/' className=" border border-primary text-primary text-xl font-bold px-3 py-1 rounded-lg text-center">GO BACK</Link>
                            <button className="btn bg-primary">POST BLOG</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default CreateBlog;
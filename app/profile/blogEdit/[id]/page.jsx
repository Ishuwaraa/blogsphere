"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import { useRouter } from 'next/navigation';

const EditBlog = ({ params }) => {
    const router = useRouter()

    const [imageUrl, setImageUrl] = useState(null)
    const [title, setTitle] = useState('')
    const [currImage, setCurrImage] = useState(null)
    const [description, setDescription] = useState('')

    const { id } = params 

    const handleSubmit = async () => {
        const data = {
            title,
            description,
            imageUrl: imageUrl? imageUrl : currImage
        }

        const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(data)
        })

        if(!res.ok) alert('Sorry we had trouble updating your blog. try again later')

        fetchData()
    }

    const deleteBlog = async (e) => {
        e.preventDefault()
        
        if(window.confirm('Are you sure you want to delete this blog?')){
            const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
                method: 'DELETE',
                headers: {"Content-Type": "application/json"}
            })
            const data = await res.json()
            
            alert(data.msg)
            router.replace('/profile')
        }
    }

    const fetchData = async () => {
        const res = await fetch(`http://localhost:3000/api/blogs/${id}`)
        const blog = await res.json()
        setTitle(blog.blog.title)
        setCurrImage(blog.blog.imageUrl)        
        setDescription(blog.blog.description)
    }
    useEffect(() => {
        fetchData()
    }, [])

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
                            {currImage && <Image src={currImage} alt='title' fill className=" absolute object-cover rounded-lg" />}
                        </div>
                    </div>
                    {imageUrl && <div>
                        <p>New image: </p>
                        <div className="relative w-40 h-40 ml-5">
                            <Image src={imageUrl} alt='title' fill className=" absolute object-cover rounded-lg" />
                        </div>
                    </div>}

                </div>

                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder="title" className="input mb-8" value={title} required onChange={(e) => setTitle(e.target.value)}/>                        
                    <input type="text" className="input mb-8" hidden readOnly value={imageUrl ? imageUrl : currImage}/>                      
                    
                    <textarea value={description} required onChange={(e) => setDescription(e.target.value)} name="" className="p-2 w-full border border-secondary rounded-lg" placeholder="turn your thoughts into words..." rows='10' style={{ resize: 'none'}}></textarea>

                    <div className=" flex justify-between mt-10 px-10">
                        <button onClick={(e) => deleteBlog(e)} className=" bg-red-600 text-white text-xl font-bold px-3 py-1 rounded-lg text-center">DELETE BLOG</button>
                        <button className="btn bg-primary">UPDATE BLOG</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
     );
}
 
export default EditBlog;
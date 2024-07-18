"use client"

import { useState } from "react";

const CreateBlog = () => {
    const [catArray, setCatArray] = useState([])

    const addCategory = (e) => {
        e.preventDefault()

        setCatArray(...e.target.value)
        console.log(catArray)
    }

    return ( 
        <div className="page">
            <div className="flex justify-center">
                <div className="flex flex-col md:w-2/3">
                    <form action="">
                        <input type="text" placeholder="title" className="input mb-8"/>

                        <p>Categories: </p>
                        <input type="checkbox" name="cat1" value='cat1' id="cat1" />
                        <label htmlFor="cat1">Category 1</label>
                        <input type="checkbox" name="cat2" value='cat2' id="cat2" />
                        <label htmlFor="cat2">Category 1</label>
                        
                        <textarea name="" className="p-2 w-full border border-secondary rounded-lg" placeholder="turn your thoughts into words..." rows='10' style={{ resize: 'none'}}></textarea>

                        <div className=" flex justify-between mt-10 px-10">
                            <button className=" border border-primary text-primary text-xl font-bold px-3 py-1 rounded-lg text-center">GO BACK</button>
                            <button className="btn bg-primary">POST BLOG</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default CreateBlog;
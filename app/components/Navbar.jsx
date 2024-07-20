"use client"

import Image from "next/image";
import { useState } from "react";
import logo from '../../public/assets/logo1.png'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Navbar = () => {
    const router = useRouter()
    const { status } = useSession()

    const [burgerIcon, setBurgerIcon] = useState(true);
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleBurgerIcon = () => {
        setBurgerIcon(!burgerIcon);
        setMenuVisible(!menuVisible);
    }     

    return ( 
        <nav className={` flex items-center justify-between border font-roboto fixed top-0 h-14 bg-white w-full z-50 ${!menuVisible && 'border-b-1 border-b-gray-200'}`}>
            <div className=' mx-10 pt-4'>
                <Link href="/"><Image width={128} height={80} src={logo} alt="Blog Sphere" /></Link>
            </div>

            <ul className=' hidden md:flex flex-grow justify-evenly mx-16 lg:px-32 text-cusGray'>
                <li><Link href="/" className=' hover:text-primary'>Blogs</Link></li>
                <li><Link href="/createBlog" className=' hover:text-primary'>Write a Blog</Link></li>
                {status === 'authenticated' && <li><Link href="/profile" className=' hover:text-primary'>Profile</Link></li>}
            </ul>

            <div className=' mx-10 block md:hidden' onClick={toggleBurgerIcon}>
            {burgerIcon ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg> 
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            )}                    
            </div>       

            <div className=' mx-10 hidden md:block'>
                {status === 'loading' ? (
                    <div>loading...</div>
                ) : status === 'authenticated'? (
                    <button className='btn bg-primary' onClick={() => router.push('/api/auth/signout')}>Log out</button>
                ) : (
                    <button className='btn bg-primary' onClick={() => router.push('/api/auth/signin')}>Log in</button>
                )}
            </div>

            {menuVisible && (
            <div className={`absolute top-14 left-0 w-full bg-white border border-b-gray-200  pb-4 md:hidden transition-all duration-500 ease-in-out transform ${menuVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <ul className='flex flex-col items-center space-y-4 py-4 text-cusGray'>
                    <li><Link href="/" className='block w-full text-center'>Blogs</Link></li>
                    <li><Link href="/createBlog" className='block w-full text-center'>Write a Blog</Link></li>
                    <li><Link href="/profile" className='block w-full text-center'>Profile</Link></li>
                </ul>
                <div className=' flex justify-center'>
                    {status === 'loading' ? (
                        <div>loading...</div>
                    ) : status === 'authenticated'? (
                        <button className='btn bg-primary' onClick={() => router.push('/api/auth/signout')}>Log out</button>
                    ) : (
                        <button className='btn bg-primary' onClick={() => router.push('/api/auth/signin')}>Log in</button>
                    )}
                </div>
            </div>
            )}
        </nav>
     );
}
 
export default Navbar;
'use client'

import { useSession } from "next-auth/react";
import Image from "next/image";

const ProfileData = () => {
    const { status, data : session } = useSession()

    return ( 
        <div className=" flex justify-center items-center gap-5 md:gap-10 mb-10">            
            <div className="relative w-24 h-24 md:w-36 md:h-36 ">
                <Image src={session.user.image} alt='title' fill className=" absolute object-cover rounded-full" />
            </div>

            <div>
                <p>{session.user.name}</p>
                {/* <p>{session.user?.id}</p> */}
                <p>{session.user.email}</p>
            </div>
        </div>
    );
}
 
export default ProfileData;
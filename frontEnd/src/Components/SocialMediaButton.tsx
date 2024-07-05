import React from 'react'
import { FaSquareFacebook, FaTwitter, FaSquareReddit, FaSquareWhatsapp } from "react-icons/fa6";

function SocialMediaButton({ url, title }: { url: string, title: string }) {
    return (
        <div className='w-full flex justify-between'>
            <a href={`https://www.facebook.com/dialog/share?app_id=1180206992856877&display=popup&href=${url}`}
             target="_blank" rel="noopener noreferrer">
                <FaSquareFacebook className=' text-[#3b5998] w-12 h-auto' />
            </a>
            <a href={`https://twitter.com/intent/tweet?url=${url}`}
                target="_blank" rel="noopener noreferrer" >
                <FaTwitter className=' text-[#00acee] w-12 h-auto' />
            </a>
            <a href={`http://www.reddit.com/submit?url=${url}&title=${title}`}
                target="_blank" rel="noopener noreferrer">
                <FaSquareReddit className=' text-[#ff4500] w-12 h-auto' />
            </a>
            <a href={`https://api.whatsapp.com/send/?text=${url}`}
                target="_blank" rel="noopener noreferrer">
                <FaSquareWhatsapp className=' text-[#25D366] w-12 h-auto' />
            </a>
        </div>
    )
}

export default SocialMediaButton

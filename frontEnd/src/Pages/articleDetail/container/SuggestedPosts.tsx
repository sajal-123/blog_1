import { PostTypeInterface, TagsTypeInterface } from '../../../Types'
import { Link } from 'react-router-dom';

function SuggestedPosts({
    className,
    header,
    posts = [],
    tags
}: {
    className: string;
    header: string;
    posts: PostTypeInterface[];
    tags:TagsTypeInterface
}) {
    return (
        <div className={` w-full hover:shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className} rounded-lg p-4`}>
            <h1 className='text-dark-hard md:text-xl lg:text-2xl font-bold font-Roboto mb-4'>{header}</h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-1'>
                {posts.length > 0 && posts.map((post,index) => (
                    <div key={index} className='flex space-x-3 flex-nowrap items-center mt-4'>
                        <img src={post.image} alt="postImage" className=' aspect-square object-cover rounded-lg  w-1/5' />
                        <div className=' text-sm md:text-lg font-Roboto font-bold text-dark-hard'>
                            <h1 className='md:text-base text-sm font-Roboto text-dark-hard lg:text-lg'>{post.title}</h1>
                                <span className=' opacity-60 text-xs md:text-sm ml-2'>{new Date(post.createdAt).toLocaleDateString("en-US", {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric'
                                })}</span>
                        </div>
                    </div>
                ))
                }
            </div>
            <h2 className='mt-8 font-medium text-dark-hard font-Roboto md:text-xl text-lg'> Tags</h2>
            <div className=' flex flex-wrap gap-x-2 gap-y-2 mt-4 '>
                {tags.map((tag,i)=>(
                 <Link key={i} to='/' className='inline-block rounded-md px-3 py-1.5 bg-primary font-Roboto text-xs md:text-sm text-white'>{tag} </Link>
                ))}
            </div>
        </div>
    )
}

export default SuggestedPosts

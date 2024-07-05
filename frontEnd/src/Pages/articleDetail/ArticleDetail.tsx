import React from 'react'
import MainComponent from '../../Components/MainComponent';
import BreadCrumbs from '../../Components/BreadCrumbs';
import { Link } from 'react-router-dom';
import SuggestedPosts from './container/SuggestedPosts';
import { BreadTypeInterface, PostTypeInterface, TagsTypeInterface } from '../../Types';
import CommentContainer from '../../Components/comments/CommentContainer';
import SocialMediaButton from '../../Components/SocialMediaButton';
function ArticleDetail() {
    const breadcrumbData: BreadTypeInterface[] = [
        { name: 'Home', link: '/' },
        { name: 'Blog', link: '/blog' },
        { name: 'Article Title', link: '/blog/1' },
    ];
    const posts: PostTypeInterface[] = [
        {
            _id: 1,
            image: 'https://plus.unsplash.com/premium_photo-1673264931454-307101fb2c31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
            title: 'Help Children Get Better Education',
            createdAt: '2023-10-20T15:35:53.647Z'
        },
        {
            _id: 2,
            image: 'https://images.unsplash.com/photo-1719843703680-8c3b0d88b6b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D',
            title: 'Supporting Child Healthcare Initiatives',
            createdAt: '2023-09-18T12:24:53.647Z'
        },
        {
            _id: 3,
            image: 'https://images.unsplash.com/photo-1718963927746-f9befcea399a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D',
            title: 'Community Building for Better Future',
            createdAt: '2023-08-25T08:15:53.647Z'

        }
    ];

    const Tags: TagsTypeInterface = [
        'React Js',
        'Next Js',
        'Tailwind CSS',
        'JavaScript',
        'TypeScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'GraphQL',
        'HTML',
        'CSS',
        'Sass',
        'Redux',
        'Jest',
        'Cypress'
    ];

    return (
        <div>
            <MainComponent>
                <section className='mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start '>
                    <article className=' flex-1'>
                        <BreadCrumbs data={breadcrumbData} />
                        <div className='lg:w-[40vw] lg:h-[50vh]'>
                            <img src="https://plus.unsplash.com/premium_photo-1673264931454-307101fb2c31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                                className='rounded-xl w-[100%] h-[100%]' alt="" />
                        </div>
                        <Link to='/blog?category=Selectedcategory' className='text-sm text-primary inline-block mt-4 font-Roboto'>EDUCATION</Link>
                        <h1 className='text-xl font-medium font-Roboto mt-4 text-dark-hard'>help Children Get Btter Eduation</h1>
                        <div className='mt-2 md:text-lg text-dark-soft'>
                            <p className=' leading-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab a modi esse quisquam iure repudiandae qui temporibus velit adipisci illo eius rerum tempore libero facere labore fugit, eligendi dolorem quibusdam nam magni veniam inventore?</p>
                        </div>
                        <CommentContainer className='' LoggedInUserId='a' />
                    </article>
                    <div>
                        <SuggestedPosts header='Latest Title' posts={posts} className='mt-8 lg:mt-0 max-w-xs' tags={Tags} />
                        <div className='mt-7 '>
                            <h1 className='font-Roboto font-medium text-dark-hard mb-4 md:text-xl'>Share on:</h1>
                            <SocialMediaButton url={encodeURI('https://www.technewsworld.com/story/compelling-new-headphones-from-heavys-and-sonos-179255.html')} title={encodeURI('Compelling New Headphones From Heavys and Sonos')} />
                        </div>
                    </div>

                </section>
            </MainComponent>
        </div>
    )
}

export default ArticleDetail

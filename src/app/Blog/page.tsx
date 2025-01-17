import Image from 'next/image'
import React from 'react'
import BlogPage from '../components/BlogPage'


const page = () => {
  return (
    <div>
          <Image src="/Group 79.png" alt='Image' width={1440} height={316} layout="responsive" objectFit="cover"/>
         <BlogPage/>
 </div>
  )
}

export default page

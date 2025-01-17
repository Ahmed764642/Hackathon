import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
        <Image src="/Group 80.png" alt='Image' width={1440} height={316} layout="responsive" objectFit="cover"/>
        <Image src="/Group 145.png" alt='Image' width={1440} height={525} layout="responsive" objectFit="cover"/><br />
        <Image src="/Frame 161.png" alt='Image' width={1440} height={270} layout="responsive" objectFit="cover"/>
        <Image src="/footer.png" alt='Image' width={1440} height={505} layout="responsive" objectFit="cover"/>
          

    </div>
  )
}

export default page

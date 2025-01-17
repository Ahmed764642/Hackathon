import Image from "next/image"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import FeaturesSection from "../components/Footer1"

const page = () => {
  return (
    <div>
  <Image src="/Group 78.png" alt='Image' width={1440} height={316} layout="responsive" objectFit="cover"/>
  <ContactSection/>
  <FeaturesSection/>
  <Footer/>
</div>
  )
}

export default page

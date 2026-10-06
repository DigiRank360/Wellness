import About from '../components/home/About'
import Blog from '../components/home/Blog'
import ContactEnquiry from '../components/home/ContactEnquiry'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import Testimonials from '../components/home/Testimonials'
import VideoSection from '../components/home/VideoSection'
import CTABanner from '../components/ui/CTABanner'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <VideoSection />
      <Blog />
      <ContactEnquiry />
      <CTABanner />
    </>
  )
}

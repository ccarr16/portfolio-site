import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Testimonials from '@/components/sections/Testimonials'
import Clients from '@/components/sections/Clients'
import YouTubeChannels from '@/components/sections/YouTubeChannels'
import Projects from '@/components/sections/Projects'
import TechStack from '@/components/sections/TechStack'
import Contact from '@/components/sections/Contact'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Testimonials />
      <Clients />
      <YouTubeChannels />
      <Projects />
      <TechStack />
      <Contact
        email="your.email@example.com"
        phone="+1234567890"
        location="City, Country"
        upworkUrl="https://www.upwork.com/freelancers/..."
        fiverrUrl="https://www.fiverr.com/..."
        whatsappNumber="+1234567890"
      />
      <Footer />
    </main>
  )
}


import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import ContactSection from '../components/ContactSection'

const Contact = () => {
  const location = useLocation()
  const inquiryRef = useRef(null)

  useEffect(() => {
    if (location.hash === '#inquiry' && inquiryRef.current) {
      inquiryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location])

  return (
    <div className='pt-24 min-h-screen bg-background-dark'>
      <header className="relative bg-background-dark border-b border-white/10 px-6 lg:px-20 py-24 text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none">
          <span className="text-[320px] font-black text-primary leading-none">05</span>
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 font-manrope">The Concierge</p>
          <h2 className="serif-title text-5xl md:text-7xl font-light text-white mb-6">Contact Us</h2>
          <div className="gold-hairline w-24"></div>
        </div>
      </header>
      
      <main className="py-12" id="inquiry" ref={inquiryRef}>
        <ContactSection />
      </main>
    </div>
  )
}

export default Contact

import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Share2 } from 'lucide-react'

const Footer = () => {

  // Open Google Maps with a single red pin at your coordinates (no directions panel)
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=22.72718,75.92261'

  const handleShare = (e) => {
    e.preventDefault()

    const shareData = {
      title: 'Winsume Lift India',
      text: 'Premium elevator and vertical mobility solutions by Winsume Lift India.',
      url: window.location.origin
    }

    if (navigator.share) {
      navigator.share(shareData).catch(() => {
        // ignore if user closes share dialog
      })
    } else {
      const whatsappUrl = `https://wa.me/917942829113?text=${encodeURIComponent(
        `${shareData.text} ${shareData.url}`
      )}`
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <footer className="bg-[#163D35] py-12 sm:py-20 px-4 sm:px-6 border-t border-[#E5E7EB]/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
        <div className="max-w-sm">
          <div className="flex items-center gap-4 mb-8">
            <img src="/5-90x90.webp" alt="Winsume Lift Logo" className="h-20 sm:h-28 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="serif-title text-2xl font-medium tracking-wider uppercase text-white leading-tight">Winsume Lift India</span>
              <span className="serif-title text-xs font-medium tracking-wider uppercase text-primary/80 leading-tight">Private Limited</span>
            </div>
          </div>
          <p className="text-sm text-white/50 leading-snug mb-8 max-w-[22rem]">
            Winsume Lift India Private Limited - Service Provider And Manufacturer Of Installation Service, Passenger Lifts & Maintenance Service Since 2018 In Indore, Madhya Pradesh.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
          <div>
            <h6 className="text-[15px] uppercase tracking-[0.3em] font-bold text-[#F26522] mb-6">Explore</h6>
            <ul className="text-[15px] text-white/50 space-y-4 font-medium tracking-wider">
              <li><Link className="hover:text-white transition-colors" to="/portfolio">Portfolio</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/collection">Collection</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/services">Services</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/about">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="text-[15px] uppercase tracking-[0.3em] font-bold text-[#F26522] mb-6">Contact</h6>
            <ul className="text-[15px] text-white/50 space-y-4 font-medium tracking-wider">
              <li>Indore Corporate</li>
              <li>Mumbai Branch</li>
              <li>Delhi Regional</li>
              <li>Bangalore Sales</li>
            </ul>
          </div>
          <div>
            <h6 className="text-[15px] uppercase tracking-[0.3em] font-bold text-[#F26522] mb-6">Location</h6>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block"
            >
              <p className="text-[15px] text-white/50 hover:text-primary transition-colors">
                Winsume Lift India Private Limited<br />
                1, Nirmal Nagar, Pipliyahana, Bhicholi Hapsi,<br />
                Indore - 452016, Madhya Pradesh, India
              </p>
            </a>
          </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer

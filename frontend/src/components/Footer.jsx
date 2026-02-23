import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Share2 } from 'lucide-react'

const Footer = () => {

  return (
    <footer className="bg-obsidian py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <div className="flex items-center gap-4 mb-8">
            <img src="/5-90x90.webp" alt="Winsume Lift Logo" className="h-16 w-22" />
            <div className="flex flex-col">
              <span className="serif-title text-2xl font-medium tracking-wider uppercase text-white leading-tight">Winsume Lift India</span>
              <span className="serif-title text-xs font-medium tracking-wider uppercase text-primary/80 leading-tight">Private Limited</span>
            </div>
          </div>
          <p className="text-[15px] text-white/50 text-xs leading-relaxed mb-8">
            Headquartered in Indore, India. Serving the world's most prestigious architectural projects with bespoke vertical transport solutions.
          </p>
          <div className="flex gap-4 mb-8">
            <a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-primary transition-colors text-white/50" href="#">
              <Share2 size={18} />
            </a>
            <a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-primary transition-colors text-white/50" href="mailto:info@winsumelift.in">
              <Mail size={18} />
            </a>
          </div>
          <a
            href="https://www.google.com/maps/place/1,+Nirmal+Nagar,+Pipliyahana,+Bhicholi+Hapsi,+Indore,+Madhya+Pradesh+452016"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-2 group-hover:text-white transition-colors">Location</p>
            <p className="text-[15px] text-white/50 hover:text-primary transition-colors">
              1, Nirmal Nagar, Pipliyahana, Bhicholi Hapsi, Indore - 452016
            </p>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
          <div>
            <h6 className="text-[15px] uppercase tracking-[0.3em] font-bold text-primary mb-6">Explore</h6>
            <ul className="text-[15px] text-white/50 space-y-4 font-medium tracking-wider">
              <li><Link className="hover:text-white transition-colors" to="/portfolio">Portfolio</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/collection">Collection</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/services">Services</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/about">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="text-[15px] uppercase tracking-[0.3em] font-bold text-primary mb-6">Contact</h6>
            <ul className="text-[15px] text-white/50 space-y-4 font-medium tracking-wider">
              <li>Indore Corporate</li>
              <li>Mumbai Branch</li>
              <li>Delhi Regional</li>
              <li>Bangalore Sales</li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h6 className="text-[14px] uppercase tracking-[0.3em] font-bold text-primary mb-6">Newsletter</h6>
            <p className="text-[15px] text-white/40 mb-4 leading-relaxed italic serif-title text-base">Subscribe for architectural insights.</p>
            <div className="flex border-b border-primary/30 pb-2">
              <input className="bg-transparent border-none text-[14px] focus:ring-0 w-full placeholder:text-white/20 text-white outline-none" placeholder="Email Address" type="email" />
              <button className="text-primary text-[15px] uppercase tracking-widest font-bold">Join</button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white/40">
        <p className="font-medium">© 2024 <span className="text-white font-bold">Winsume Lift India</span> <span className="text-primary/80">Private Limited</span>. All Rights Reserved.</p>
        <div className="flex gap-8">
          <Link className="hover:text-primary transition-colors" to="#">Privacy</Link>
          <Link className="hover:text-primary transition-colors" to="#">Legal</Link>
          <Link className="hover:text-primary transition-colors" to="#">Cookies</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
